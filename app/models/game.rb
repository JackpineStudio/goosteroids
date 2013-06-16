NUM_HIGH_SCORES = 6

class Game < ActiveRecord::Base
	attr_accessible  :start_time, :end_time, :player_name, :score, :session_id, :over
	
	belongs_to :session
	
	def self.find_high_scores
		return where(:over => true).order("score DESC").limit(NUM_HIGH_SCORES)
	end
	
	def high_score?
		scores = self.class.find_high_scores
		
		if (scores.count < NUM_HIGH_SCORES)
			return true
		end
		
		return_value = false
		
		scores.each do |element|			
			if (self.score >= element.score && !return_value)
				return_value = true
			end
		end
		
		return return_value
	end
end
