class Game < ActiveRecord::Base
	attr_accessible  :start_time, :end_time, :name, :score, :session_id, :game_over
	
	belongs_to :session
	
	def self.find_high_scores
		return where(:game_over => true).order("score DESC").limit(10)
	end
	
	def high_score?
		scores = self.class.find_high_scores
		
		if scores.count == 0
			return true
		end
		
		return_value = false
		
		scores.each do |element|			
			if self.score >= element.score && !return_value
				return_value = true
			end
		end
		
		return return_value
	end
end
