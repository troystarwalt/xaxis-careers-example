class Department < ActiveRecord::Base
  mount_uploader :hero_image, HeroImageUploader
  extend FriendlyId
  friendly_id :name, use: :slugged

  def self.update_job_counts
    all.each do |department|
      department.update(job_count: JobListing.where(department: department.name).count)
    end
  end
end
