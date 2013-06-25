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
			gravity: 30, gravity_dropoff: 0.01, 
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
