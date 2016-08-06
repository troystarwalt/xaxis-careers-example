class Location < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged
  belongs_to :region

  def self.update_job_counts
    all.each do |location|
      location.update(job_count: JobListing.where(location_city: location.name).count)
    end
  end
end
