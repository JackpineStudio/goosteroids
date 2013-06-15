class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :session_id, :null => false
      t.string :remote_ip, :null => false
      t.timestamp :last_active, :null => false
      t.boolean :session_valid, :default => true
      
      t.timestamps
    end
  end
end
