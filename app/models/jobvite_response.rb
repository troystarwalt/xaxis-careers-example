class JobviteResponse < ActiveRecord::Base
  has_many :job_listings, dependent: :destroy

end
