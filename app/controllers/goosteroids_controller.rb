ERROR_UNKNOWN = "Unknown error"
ERROR_PING = "Ping too high"
ERROR_SESSION_CREATE = "Unable to create session"
ERROR_SESSION_SAVE = "Unable to save session"
ERROR_SESSION_EXPIRED = "Session expired"
ERROR_SESSION_FIND = "Unable to find session"
ERROR_GAME_CREATE = "Failed to create game"
ERROR_GAME_CHEAT = "Cheating detected"
ERROR_GAME_SAVE = "Unable to save game"
ERROR_GAME_FIND = "Unable to find game"

SESSION_ID_LENGTH = 64

MAX_PING = 5
MAX_INACTIVE_TIME = 5*60
MAX_SCORE_INCREASE = 200

class GoosteroidsController < ApplicationController
	#
	# Creates a new session ID and session object
	#
	def index
		#Create random 64-character/64-bit character session ID
		symbols = ('a'..'z').to_a.concat(('A'..'Z').to_a.concat((0..9).to_a))
		@session_id = (0...SESSION_ID_LENGTH).map{ symbols[rand(symbols.length)] }.join
		
		#Log info
		log(INFO, "goosteroids/index", { remote_ip: request.remote_ip, session_id: @session_id } )
		
		#Create session
		if (!Session.create({ remote_ip: request.remote_ip, session_id: @session_id, last_active: Time.now }))
			log(ERROR, "ERROR goosteroids/index", { remote_ip: request.remote_ip, session_id: @session_id,  error_message: ERROR_CREATE_SESSION } ) 
			return
		end
		
		#Send javascript response
		send_javascript_response();
	end
	
	#
	# Updates the session object and creates a game
	#
	def new		
		server_time = Time.now.to_i
		
		#Get parameters
		session_id = params[:session_id]
		
		#Log info
		log(INFO, "goosteroids/new", { remote_ip: request.remote_ip, session_id: session_id } )
		
		#Create response
		@response = { "type" => "response-goosteroids-new", "server_time" => time_ruby_to_js(server_time) }
		
		#Retrieve session
		session = session_find(session_id, @response)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!session || !session_valid(session, @response))
			return send_json_response(@response)
		end
				
		#Update session
		if (!session_update(session, @response))
			return send_json_response(@response)
		end
		
		#Create game		
		game = game_create(session, server_time, @response)
		
		if (!game)
			return send_json_response(@response)
		end

		send_json_response(merge(@response, { "game_id" => game.id } ))
	end
	
	#
	# Updates the session and updates a game in progress
	#
	def update
		server_time = Time.now.to_i
		
		#Get parameters
		session_id = params[:session_id]
		game_id = params[:game_id].to_i
		score = params[:score].to_i
		stage = params[:stage].to_i
		client_timestamp = time_js_to_ruby(params[:client_timestamp].to_i)
		
		#Log info
		log(INFO, "goosteroids/update", { remote_ip: request.remote_ip, session_id: session_id,  game_id: game_id, client_timestamp:  client_timestamp, server_time: server_time, score: score })
		
		#Create response
		@response = { "type" => "response-goosteroids-update", "server_time" => time_ruby_to_js(server_time) }
		
		#Check the ping time
		if (client_timestamp - server_time).abs > MAX_PING
			log(ERROR, "goosteroids/update", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_PING } ) 
			return send_json_response(merge(@response, { "type" => "error", "error_message" => ERROR_PING } ))
		end
		
		#Retrieve session
		session = session_find(session_id, @response)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!session || !session_valid(session, @response))
			return send_json_response(@response)
		end
		
		#Update session
		if (!session_update(session, @response))
			return send_json_response(@response)
		end
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end
		
		#Update game
		if ((game.stage + 1) == stage)
			game.stage = stage
		end
		
		if (score - game.score >  MAX_SCORE_INCREASE)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_GAME_CHEAT})
			return send_json_response(merge(response, { "type" => "error", "error_message" => ERROR_GAME_CHEAT } ))
		else
			game.score = score
		end
		
		if (!game_update(game, @response))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Ends the game
	#
	def end_game
		#Get server timestamp
		server_time = Time.now.to_i
		
		#Get parameters
		session_id = params[:session_id]
		game_id = params[:game_id].to_i
		
		#Log info
		log(INFO, "goosteroids/end_game", { remote_ip: request.remote_ip, session_id: session_id,  game_id: game_id })
		
		#Create response
		@response = { "type" => "response-goosteroids-end-game", "server_time" => time_ruby_to_js(server_time) }
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end
		
		#Update game
		game.update_attributes( { :game_over => true,  :end_time => Time.new} )
	
		if (!game.save)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip, session_id: session_id, game_id: game_id, error_message: ERROR_GAME_SAVE } )
			return send_json_response(merge(@response, { "type" => "error", "error_message" => ERROR_GAME_SAVE } ))
		end

		send_json_response(merge(@response, { "high_score" => game.high_score? }))
	end
	
	#
	# Find session
	#
	private
	def session_find(session_id, response)
		if (!session_id || session_id.length != SESSION_ID_LENGTH)
			log(ERROR, "goosteroids/session_find", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_UNKNOWN})
			merge(response, { "type" => "error", "error_message" => ERROR_UNKNOWN } )
			return nil
		end
		
		session = Session.find_by_session_id(session_id)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!session)
			log(ERROR, "goosteroids/session_find", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_SESSION_FIND})
			merge(response, { "type" => "error", "error_message" => ERROR_SESSION_FIND } )
			return nil
		end
		
		return session
	end
	
	#
	# Update session
	#
	private
	def session_update(session, response)
		if (!session)
			log(ERROR, "goosteroids/session_update", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_UNKNOWN})
			merge(response, { "type" => "error", "error_message" => ERROR_UNKNOWN } )
			return false
		end
		
		if (!session.save)
			log(ERROR, "goosteroids/session_update", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_SESSION_SAVE})
			merge(response, { "type" => "error", "error_message" => ERROR_SESSION_SAVE } )
			return false
		end
		
		return true
	end
	
	#
	# Validate session
	#
	private
	def session_valid(session, response)
		if (!session)
			log(ERROR, "goosteroids/validate_session", { remote_ip: request.remote_ip, error_message: ERROR_UNKNOWN})
			merge(response, { "type" => "error", "error_message" => ERROR_UNKNOWN } )
			return false
		end
		
		if ((Time.now.to_i - session.updated_at.to_i) > MAX_INACTIVE_TIME)
			log(ERROR, "goosteroids/validate_session", { remote_ip: request.remote_ip, session_id: session.id,  error_message: ERROR_SESSION_EXPIRED})
			merge(response, { "type" => "error", "error_message" => ERROR_SESSION_EXPIRED } )
			return false
		end
		
		return true
	end
	
	#
	# Create game
	#
	private
	def game_create(session, start_time, response)
		game = session.games.create( { start_time: Time.at(start_time) } )
		
		if (!game)
			log(ERROR, "goosteroids/new", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_GAME_CREATE } ) 
			merge(@response, { "type" => "error", "error_message" => ERROR_GAME_CREATE } )
			return nil			
		end
		
		return game
	end	
	
	#
	# Find game
	#
	private
	def game_find(game_id, response)
		if (game_id <= 0)
			log(ERROR, "goosteroids/game_find", { remote_ip: request.remote_ip, game_id: game_id,  error_message: ERROR_UNKNOWN})
			merge(response, { "type" => "error", "error_message" => ERROR_UNKNOWN } )
			return nil
		end
		
		game = Game.find(game_id)
		
		#Check if the game was retreived successfully and whether the game is inactive
		if (!game)
			log(ERROR, "goosteroids/game_find", { remote_ip: request.remote_ip, game_id: game_id,  error_message: ERROR_GAME_FIND})
			merge(response, { "type" => "error", "error_message" => ERROR_GAME_FIND } )
			return nil
		end
		
		return game
	end
	
	#
	# Update game
	#
	private
	def game_update(game, response)
		if (!game)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip,  error_message: ERROR_UNKNOWN})
			merge(response, { "type" => "error", "error_message" => ERROR_UNKNOWN } )
			return false
		end
		
		if (!game.save)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_SESSION_SAVE})
			merge(response, { "type" => "error", "error_message" => ERROR_SESSION_SAVE } )
			return false
		end
		
		return true
	end	
end
