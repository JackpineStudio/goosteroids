#	Goosteroids: A fight for the future of the internet!
#
#    Copyright (C) 2013 James McLean
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.

require 'json'
require 'game_settings'

include GameSettings

ERROR_UNKNOWN = "Unknown error"
ERROR_SESSION_CREATE = "Unable to create session"
ERROR_SESSION_SAVE = "Unable to save session"
ERROR_SESSION_EXPIRED = "Session expired"
ERROR_SESSION_INVALID = "Session invalid"
ERROR_SESSION_FIND = "Unable to find session"
ERROR_GAME_CREATE = "Failed to create game"
ERROR_GAME_CHEAT = "Cheating detected"
ERROR_GAME_SAVE = "Unable to save game"
ERROR_GAME_FIND = "Unable to find game"
ERROR_INVALID_PARAMS = "Invalid parameters"

SESSION_ID_LENGTH = 64

MAX_LIVES = 3
MAX_TIME_BETWEEN_UPDATES = 15
MIN_TIME_BETWEEN_UPDATES = 2
MAX_INACTIVE_TIME = 5*60
MAX_GLOBS_DESTROYED = 19
GLOB_POINT_VALUE = 10

class GoosteroidsController < ApplicationController
	skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }
	
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
		log_info( { remote_ip: request.remote_ip.to_s, session_id: @session_id } )
		
		#Create session
		if (!Session.create( { remote_ip: request.remote_ip.to_s, session_id: @session_id } ))
			log_error(ERROR_CREATE_SESSION, { remote_ip: request.remote_ip.to_s, session_id: @session_id } ) 
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
		log_info( { remote_ip: request.remote_ip.to_s, session_id: @session_id } )
		
		#Create game		
		game = game_create(@session)
		
		if (!game)
			return send_json_response(@response)
		end

		send_json_response(merge(@response, { game_id: game.id } ))
	end
	
	#
	# Get settings for a given stage
	#
	def get_settings
		#Check parameters
		if (!params[:game_id])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end		
		
		#Get parameters
		game_id = params[:game_id].to_i
		
		#Find game
		game = game_find(game_id)
		
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
		#Check parameters
		if (!params[:game_id] || !params[:globs_destroyed])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end
		
		#Get parameters
		game_id = params[:game_id].to_i
		globs_destroyed = params[:globs_destroyed].to_i
		
		#Find game
		game = game_find(game_id)
		
		if (!game)
			return send_json_response(@response)
		end
		
		if (game.globs_destroyed + globs_destroyed != GameSettings.num_globs(game.stage))
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, game_id: game.id } )
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end
		
		game.stage += 1
		game.globs_destroyed = 0
		game.score += globs_destroyed * GLOB_POINT_VALUE
				
		if (!game_update(game))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Updates the session and updates a game in progress
	#
	def update_game
		#Check parameters
		if (!params[:game_id] || !params[:lives] || !params[:globs_destroyed])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end
		
		#Get parameters
		game_id = params[:game_id].to_i
		lives = params[:lives].to_i
		globs_destroyed = params[:globs_destroyed].to_i
		
		#Get server time
		server_time = Time.now.to_i
		
		#Log info
		log_info( { remote_ip: request.remote_ip.to_s, session_id: @session_id,  game_id: game_id, server_time: server_time, globs_destroyed: globs_destroyed } )
		
		#Find game
		game = game_find(game_id)
		
		if (!game)
			return send_json_response(@response)
		end

		#Check time between updates
		if (server_time - game.updated_at.to_i > MAX_TIME_BETWEEN_UPDATES)
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end
		
		if (server_time - game.updated_at.to_i < MIN_TIME_BETWEEN_UPDATES)
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end
		
		#Check number of player lives
		if (lives > MAX_LIVES)
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, session_id: @session_id } ) 
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end		
		
		#Check if the number of globs destroyed is improbable
		if (globs_destroyed >  MAX_GLOBS_DESTROYED)
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, game_id: game.id } )
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end
			
		game.globs_destroyed += globs_destroyed
		game.score += globs_destroyed * GLOB_POINT_VALUE
		game.dirty = !game.dirty
		
		if (!game_update(game))
			return send_json_response(@response)
		end
		
		send_json_response(@response)
	end
	
	#
	# Ends the game
	#
	def end_game
		#Check parameters
		if (!params[:game_id] || !params[:globs_destroyed])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end		
		
		#Get parameters
		game_id = params[:game_id].to_i
		globs_destroyed = params[:globs_destroyed].to_i
		
		#Log info
		log_info( { remote_ip: request.remote_ip.to_s, session_id: @session_id,  game_id: game_id } )
				
		#Find game
		game = game_find(game_id)
		
		if (!game)
			return send_json_response(@response)
		end
		
		if (game.globs_destroyed + globs_destroyed > GameSettings.num_globs(game.stage))
			log_error(ERROR_GAME_CHEAT, { remote_ip: request.remote_ip.to_s, game_id: game.id } )
			return send_json_response(error_response(ERROR_GAME_CHEAT))
		end
		
		game.over = true
		game.end_time = Time.now
		game.score += globs_destroyed * GLOB_POINT_VALUE
	
		if (!game_update(game))
			return send_json_response(@response)
		end

		send_json_response(merge(@response, { high_score: game.high_score? } ))
	end
	
	#
	# Sets a player name
	#
	def set_player_name
		#Check parameters
		if (!params[:game_id] || !params[:name])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s, session_id: @session_id  } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end
		
		#Get parameters
		game_id = params[:game_id].to_i
		name = params[:name]
		
		#Find game
		game = game_find(game_id)
		
		if (!game)
			return send_json_response(@response)
		end

		if (!game.player_name || game.player_name.length == 0)
			game.player_name = name
		end
		
		if (!game_update(game))
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
			
			player_name = (!game.player_name || game.player_name.length == 0) ? "Anonymous Coward" : game.player_name
			
			scores.push( { player_name: player_name, stage: game.stage, score: game.score, time: time_str } )
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
		@response = { type:  controller_name + "/" + action_name }
	end
	
	def error_response(msg)
		return merge(@response, { type: "error", error_message: msg } );
	end
	
	#
	# Session filter
	#
	def session_filter
		#Check parameters
		if (!params[:session_id])
			log_error(ERROR_INVALID_PARAMS, { remote_ip: request.remote_ip.to_s } ) 
			return send_json_response(error_response(ERROR_INVALID_PARAMS))
		end		
		
		@session_id = params[:session_id]
		
		if (!@session_id || @session_id.length != SESSION_ID_LENGTH)
			log_error(ERROR_SESSION_INVALID, { remote_ip: request.remote_ip.to_s, session_id: @session_id } )
			return send_json_response(error_response(ERROR_SESSION_INVALID))
		end
		
		#Retrieve session
		@session = session_find(@session_id)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!@session || !session_valid(@session))
			return send_json_response(@response)
		end
		
		@session.mark_dirty()
		
		#Update session
		if (!session_update(@session))
			return send_json_response(@response)
		end
	end
	
	#
	# Find session
	#
	def session_find(session_id)
		if (!session_id || session_id.length != SESSION_ID_LENGTH)
			log_error(ERROR_UNKNOWN, { remote_ip: request.remote_ip.to_s, session_id: session_id } )
			error_response(ERROR_UNKNOWN)
			return nil
		end
		
		session = Session.find_by_session_id(session_id)
		
		#Check if the session was retreived successfully and whether the session is inactive
		if (!session)
			log_error(ERROR_SESSION_FIND, { remote_ip: request.remote_ip.to_s, session_id: session_id } )
			error_response(ERROR_SESSION_FIND)
			return nil
		end
		
		return session
	end
	
	#
	# Update session
	#
	def session_update(session)
		if (!session)
			log_error(ERROR_UNKNOWN, { remote_ip: request.remote_ip.to_s, session_id: session_id } )
			error_response(ERROR_UNKNOWN)
			return false
		end
		
		if (!session.save)
			log_error(ERROR_SESSION_SAVE, { remote_ip: request.remote_ip.to_s, session_id: session_id } )
			error_response(ERROR_SESSION_SAVE)
			return false
		end
		
		return true
	end
	
	#
	# Validate session
	#
	def session_valid(session)
		if (!session)
			log_error(ERROR_UNKNOWN, { remote_ip: request.remote_ip.to_s } )
			error_response(ERROR_UNKNOWN)
			return false
		end
		
		if ((Time.now.to_i - session.updated_at.to_i) > MAX_INACTIVE_TIME)
			log_error(ERROR_SESSION_EXPIRED, { remote_ip: request.remote_ip.to_s, session_id: session.id } )
			error_response(ERROR_SESSION_EXPIRED)
			return false
		end
		
		return true
	end
	
	#
	# Create game
	#
	def game_create(session)
		game = session.games.create( { start_time: Time.now } )
		
		if (!game)
			log_error(ERROR_GAME_CREATE, { remote_ip: request.remote_ip.to_s, session_id: session_id } ) 
			error_response(ERROR_GAME_CREATE)
			return nil			
		end
		
		return game
	end	
	
	#
	# Find game
	#
	def game_find(game_id)
		if (game_id <= 0)
			log_error(ERROR_UNKNOWN, { remote_ip: request.remote_ip.to_s, game_id: game_id } )
			error_response(ERROR_UNKNOWN)
			return nil
		end
		
		game = Game.find(game_id)
		
		#Check if the game was retreived successfully and whether the game is inactive
		if (!game)
			log_error(ERROR_GAME_FIND, { remote_ip: request.remote_ip.to_s, game_id: game_id } )
			error_response(ERROR_GAME_FIND)
			return nil
		end
		
		return game
	end
	
	#
	# Update game
	#
	def game_update(game)
		if (!game)
			log_error(ERROR_UNKNOWN, { remote_ip: request.remote_ip.to_s } )
			error_response(ERROR_UNKNOWN)
			return false
		end
		
		if (!game.save)
			log_error(ERROR_SESSION_SAVE, { remote_ip: request.remote_ip.to_s, game_id: game.id } )
			error_response(ERROR_SESSION_SAVE)
			return false
		end
		
		return true
	end
end
