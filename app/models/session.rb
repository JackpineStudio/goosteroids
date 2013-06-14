class Session < ActiveRecord::Base
  attr_accessible :last_active, :session_id
end
