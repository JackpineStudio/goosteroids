class Session < ActiveRecord::Base
  attr_accessible :last_active, :session_id, :remote_ip, :session_valid
  
  has_many :games, dependent: :destroy
end
