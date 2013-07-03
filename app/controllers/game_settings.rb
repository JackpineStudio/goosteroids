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

module GameSettings
	SETTINGS = [
		{ 	
			gravity: 40, gravity_dropoff: 0.001, 
			glob_max_speed: 400, glob_blast_radius: 30, glob_blast_magnitude: 200, glob_cr: 0.80,
			blobs: [ { size: 20, speed: 200 } ]
		},
		
		{
			gravity: 30, gravity_dropoff: 0.005, 
			glob_max_speed: 400, glob_blast_radius: 30, glob_blast_magnitude: 200, glob_cr: 0.80,
			blobs: [ { size: 20, speed: 200 }, { size: 10, speed: 400 } ]
		},
		
		{
			gravity: 60, gravity_dropoff: 0.005, 
			glob_max_speed: 500, glob_blast_radius: 30, glob_blast_magnitude: 300, glob_cr: 0.80,
			blobs: [ { size: 20, speed: 200 }, { size: 10, speed: 300 }, { size: 10, speed: 500 } ]
		}
	]
	
	def get_settings(stage)
		if stage <= SETTINGS.length
			level = stage
		else
			level = SETTINGS.length
		end
		
		return SETTINGS[level - 1]
	end
	
	def num_globs(stage)
		sum = 0
		
		settings = get_settings(stage)
		
		settings[:blobs].each { |blob| sum += blob[:size] }
		
		return sum
	end
end
