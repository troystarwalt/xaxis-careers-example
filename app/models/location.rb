class Location < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
end
