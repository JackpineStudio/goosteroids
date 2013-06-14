class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :session_id
      t.datetime :last_active

      t.timestamps
    end
  end
end
