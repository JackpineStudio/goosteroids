class Session < ActiveRecord::Base
  attr_accessible :session_id, :remote_ip, :dirty
  
  has_many :games, dependent: :destroy
  
  def mark_dirty()
  	  self.dirty = !self.dirty
  end
end
