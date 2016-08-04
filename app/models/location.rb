class Location < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged
  belongs_to :region
end
