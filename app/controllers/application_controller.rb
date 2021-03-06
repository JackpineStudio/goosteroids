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

INFO = "INFO"
ERROR = "ERROR"
WARN = "WARN"
DEBUG = "DEBUG"
FATAL = "FATAL"

class ApplicationController < ActionController::Base
	protect_from_forgery
	
	#Write a message to the log
	protected
	def log(level, fields)
		msg = level + " "
		msg += Time.zone.now.to_s
		msg += " " + controller_name + "/" + action_name + " "
		msg += fields.to_s
		msg = msg.chomp(",")
		
		if level == INFO
			logger.info(msg)
		elsif level == ERROR
			logger.error(msg)
		elsif level == WARN
			logger.warn(msg)
		elsif level == DEBUG
			logger.debug(msg)
		elsif level == FATAL
			logger.fatal(msg)
		end
	end
	
	def log_info(fields)
		log(INFO, fields)
	end
	
	def log_error(msg, fields)
		if fields
			log(ERROR, merge(fields, { error_message: msg }))
		end
	end
	
	#Merge response
	protected
	def merge(object1, object2)
		return object1 = object1.merge!(object2)
	end
	
	#Send JSON response
	protected
	def send_json_response(response = nil)
		log_info(merge( { "remote_ip" => request.remote_ip }, response))
		respond_to { |format| format.json { render json: response } }
	end
	
	#Send Javascript response
	protected
	def send_javascript_response(template = nil)
		if (template)
			respond_to { |format| format.js { render :template => template } }
		else
			respond_to { |format| format.js }
		end
	end
	
	#Convert Ruby UTC to Javascript UTC
	private
	def time_js_to_ruby(time)
		return time / 1000
	end
	
	private
	def time_ruby_to_js(time)
		return time * 1000
	end
	
	protected :log, :send_json_response
end
