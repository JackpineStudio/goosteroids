require 'json'
require 'game_settings'

include GameSettings

ERROR_UNKNOWN = "Unknown error"
ERROR_PING = "Ping too high"
ERROR_SESSION_CREATE = "Unable to create session"
ERROR_SESSION_SAVE = "Unable to save session"
ERROR_SESSION_EXPIRED = "Session expired"
ERROR_SESSION_INVALID = "Session invalid"
ERROR_SESSION_FIND = "Unable to find session"
ERROR_GAME_CREATE = "Failed to create game"
ERROR_GAME_CHEAT = "Cheating detected"
ERROR_GAME_SAVE = "Unable to save game"
ERROR_GAME_FIND = "Unable to find game"

SESSION_ID_LENGTH = 64

MAX_PING = 5
MAX_INACTIVE_TIME = 5*60
MAX_GLOBS_DESTROYED = 20
MAX_LIVES = 3

class GoosteroidsController < ApplicationController
	before_filter :create_response
	before_filter :session_filter, only: [:new_game, :update_game, :get_settings, :end_game, :end_stage, :set_player_name, :get_high_scores]
	
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
	def new_game	
		#Log info
		log(INFO, "goosteroids/new_game", { remote_ip: request.remote_ip, session_id: @session_id } )
		
		#Create game		
		game = game_create(@session, @response)
		
		if (!game)
			return send_json_response(@response)
		end

		send_json_response(merge(@response, { game_id: game.id } ))
	end
	
	#
	# Get settings for a given stage
	#
	def get_settings
		#Get parameters
		game_id = params[:game_id].to_i
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end
		
		settings = GameSettings.get_settings(game.stage)
		
		send_json_response(merge(@response, { settings: settings } ))
	end
	
	#
	# Ends a stage
	#
	def end_stage
		#Get parameters
		game_id = params[:game_id].to_i
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end
		
		if (game.globs_destroyed != GameSettings.num_globs(game.stage))
			log(ERROR, "goosteroids/end_stage", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_GAME_CHEAT})
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_GAME_CHEAT } ))
		end
		
		game.stage += 1
		game.globs_destroyed = 0
				
		if (!game_update(game, @response))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Updates the session and updates a game in progress
	#
	def update_game
		#Get parameters
		game_id = params[:game_id].to_i
		lives = params[:lives].to_i
		globs_destroyed = params[:globs_destroyed].to_i
		client_time = time_js_to_ruby(params[:client_time].to_i)
		
		#Get server time
		server_time = Time.now.to_i
		
		#Log info
		log(INFO, "goosteroids/update_game", { remote_ip: request.remote_ip, session_id: @session_id,  game_id: game_id, client_time: client_time, server_time: server_time, globs_destroyed: globs_destroyed })
		
		#Check the ping time
		if ((client_time - server_time).abs > MAX_PING)
			log(ERROR, "goosteroids/update_game", { remote_ip: request.remote_ip, session_id: @session_id,  error_message: ERROR_PING } ) 
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_PING } ))
		end
		
		#Check number of player lives
		if (lives > MAX_LIVES)
			log(ERROR, "goosteroids/update_game", { remote_ip: request.remote_ip, session_id: @session_id,  error_message: ERROR_GAME_CHEAT } ) 
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_GAME_CHEAT } ))
		end
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end

		if (globs_destroyed >  MAX_GLOBS_DESTROYED)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_GAME_CHEAT})
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_GAME_CHEAT } ))
		end
			
		game.globs_destroyed += globs_destroyed
		game.score += globs_destroyed * 10
		
		if (!game_update(game, @response))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Ends the game
	#
	def end_game
		#Get parameters
		game_id = params[:game_id].to_i
		
		#Log info
		log(INFO, "goosteroids/end_game", { remote_ip: request.remote_ip, session_id: @session_id,  game_id: game_id })
				
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end
		
		if (game.globs_destroyed > GameSettings.num_globs(game.stage))
			log(ERROR, "goosteroids/end_game", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_GAME_CHEAT})
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_GAME_CHEAT } ))
		end
		
		game.over = true
		game.end_time = Time.now
	
		if (!game_update(game, @response))
			return send_json_response(@response)
		end

		send_json_response(merge(@response, { high_score: game.high_score? }))
	end
	
	#
	# Sets a player name
	#
	def set_player_name
		#Get parameters
		game_id = params[:game_id].to_i
		name = params[:name]
		
		#Find game
		game = game_find(game_id, @response)
		
		if (!game)
			return send_json_response(@response)
		end

		if (!game.player_name || game.player_name.length == 0)
			game.player_name = name
		end
		
		if (!game_update(game, @response))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Retrieves high scores
	#
	def get_high_scores
		scores = []
		
		Game.find_high_scores.each do |game|
			time = game.end_time - game.start_time 
			
			hours = (time / (60 * 60)).to_i
			
			time -= hours * (60 * 60)
			
			minutes = (time / 60).to_i
			
			time -= minutes * 60
			
			seconds = time.to_i
			
			time_str = ""
			
			if (hours > 0)
				time_str += hours.to_s + "h "
			end
			
			if (minutes > 0)
				time_str += minutes.to_s + "m " 
			end
			
			time_str += seconds.to_s + "s"
			
			scores.push( { player_name: game.player_name, stage: game.stage, score: game.score, time: time_str } )
		end
		
		send_json_response(merge(@response, { high_scores: scores } ))
	end
	
	#
	# Private methods
	#
	
	private
	
	#
	# Create response filter
	#
	def create_response
		@response = { type: "goosteroids/" + action_name }
	end
	
	#
	# Session filter
	#
	def session_filter
		@session_id = params[:session_id]
		
		if (!@session_id || @session_id.length != SESSION_ID_LENGTH)
			log(ERROR, "goosteroids/session_filter", { remote_ip: request.remote_ip, session_id: @session_id,  error_message: ERROR_SESSION_INVALID})
			return send_json_response(merge(@response, { type: "error", error_message: ERROR_SESSION_INVALID } ))
		end
		
		#Retrieve session
		@session = session_find(@session_id, @response)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!@session || !session_valid(@session, @response))
			return send_json_response(@response)
		end
				
		#Update session
		if (!session_update(@session, @response))
			return send_json_response(@response)
		end
	end
	
	#
	# Find session
	#
	def session_find(session_id, response)
		if (!session_id || session_id.length != SESSION_ID_LENGTH)
			log(ERROR, "goosteroids/session_find", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_UNKNOWN})
			merge(response, { type: "error", error_message: ERROR_UNKNOWN } )
			return nil
		end
		
		session = Session.find_by_session_id(session_id)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!session)
			log(ERROR, "goosteroids/session_find", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_SESSION_FIND})
			merge(response, { type: "error", error_message: ERROR_SESSION_FIND } )
			return nil
		end
		
		return session
	end
	
	#
	# Update session
	#
	def session_update(session, response)
		if (!session)
			log(ERROR, "goosteroids/session_update", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_UNKNOWN})
			merge(response, { type: "error", error_message: ERROR_UNKNOWN } )
			return false
		end
		
		if (!session.save)
			log(ERROR, "goosteroids/session_update", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_SESSION_SAVE})
			merge(response, { type: "error", error_message: ERROR_SESSION_SAVE } )
			return false
		end
		
		return true
	end
	
	#
	# Validate session
	#
	def session_valid(session, response)
		if (!session)
			log(ERROR, "goosteroids/validate_session", { remote_ip: request.remote_ip, error_message: ERROR_UNKNOWN})
			merge(response, { type: "error", error_message: ERROR_UNKNOWN } )
			return false
		end
		
		if ((Time.now.to_i - session.updated_at.to_i) > MAX_INACTIVE_TIME)
			log(ERROR, "goosteroids/validate_session", { remote_ip: request.remote_ip, session_id: session.id,  error_message: ERROR_SESSION_EXPIRED})
			merge(response, { type: "error", error_message: ERROR_SESSION_EXPIRED } )
			return false
		end
		
		return true
	end
	
	#
	# Create game
	#
	def game_create(session, response)
		game = session.games.create( { start_time: Time.now } )
		
		if (!game)
			log(ERROR, "goosteroids/new", { remote_ip: request.remote_ip, session_id: session_id,  error_message: ERROR_GAME_CREATE } ) 
			merge(@response, { type: "error", error_message: ERROR_GAME_CREATE } )
			return nil			
		end
		
		return game
	end	
	
	#
	# Find game
	#
	def game_find(game_id, response)
		if (game_id <= 0)
			log(ERROR, "goosteroids/game_find", { remote_ip: request.remote_ip, game_id: game_id,  error_message: ERROR_UNKNOWN})
			merge(response, { type: "error", error_message: ERROR_UNKNOWN } )
			return nil
		end
		
		game = Game.find(game_id)
		
		#Check if the game was retreived successfully and whether the game is inactive
		if (!game)
			log(ERROR, "goosteroids/game_find", { remote_ip: request.remote_ip, game_id: game_id,  error_message: ERROR_GAME_FIND})
			merge(response, { type: "error", error_message: ERROR_GAME_FIND } )
			return nil
		end
		
		return game
	end
	
	#
	# Update game
	#
	def game_update(game, response)
		if (!game)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip,  error_message: ERROR_UNKNOWN})
			merge(response, { type: "error", error_message: ERROR_UNKNOWN } )
			return false
		end
		
		if (!game.save)
			log(ERROR, "goosteroids/game_update", { remote_ip: request.remote_ip, game_id: game.id,  error_message: ERROR_SESSION_SAVE})
			merge(response, { type: "error", error_message: ERROR_SESSION_SAVE } )
			return false
		end
		
		return true
	end
end
