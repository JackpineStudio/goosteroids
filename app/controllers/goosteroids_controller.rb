class GoosteroidsController < ApplicationController
	def index
		@session_id = (0...50).map{ ('a'..'z').to_a[rand(26)] }.join
		
		respond_to do |format|
			format.js
		end
	end
end
