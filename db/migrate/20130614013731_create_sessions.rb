class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :session_id, :null => false
      t.string :remote_ip, :null => false
      t.boolean :dirty, :default => false
      t.timestamps
    end
  end
end
