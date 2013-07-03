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
