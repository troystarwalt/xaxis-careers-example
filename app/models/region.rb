class Region < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged
  has_many :locations
end
