class Region < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged
  has_many :locations

  def self.update_job_counts
    all.each do |region|
      region.update(job_count: JobListing.where(region: region.name).count)
    end
  end
end
