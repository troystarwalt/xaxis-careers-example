class Region < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
end
