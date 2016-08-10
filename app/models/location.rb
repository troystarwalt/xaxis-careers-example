class Location < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged
  belongs_to :region
  geocoded_by :name_and_country
  after_validation :geocode

  def self.update_job_counts
    all.each do |location|
      location.update(job_count: JobListing.where(location_city: location.name).count)
    end
  end

  def name_and_country
    "#{name}, #{country}"
  end


end
