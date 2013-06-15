class CreateGames < ActiveRecord::Migration
	def change
		create_table :games do |t|
			t.integer :session_id, :null => false
			t.integer :score, :default => 0
			t.integer :stage, :default => 1
			t.string :name
			t.timestamp :start_time, :null => false
			t.timestamp :end_time
			t.boolean :game_over, :default => false
			
			t.timestamps
		end
	end
end
