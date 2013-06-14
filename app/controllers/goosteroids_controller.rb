class GoosteroidsController < ApplicationController
	def index
		symbols = ('a'..'z').to_a.concat(('A'..'Z').to_a.concat((0..9).to_a))
		
		@session_id = (0...63).map{ symbols[rand(63)] }.join
		
		respond_to do |format|
			format.js
		end
	end
end
