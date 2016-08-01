class JobviteResponse < ActiveRecord::Base
  has_many :job_listings, dependent: :destroy

  # def self.get_regions
  #   OPTIONS[:regions]
  # end
  #
  # def self.get_region_by_name(region_name)
  #   OPTIONS[:regions].detect{|hash| hash[:slug] == hash[region_name]}
  # end
  #
  # def self.get_current_departments
  #   OPTIONS[:departments]
  # end
  #
  # def self.get_current_locations
  #   OPTIONS[:locations]
  # end
  #
  # def self.get_location_from_slug(slug)
  #   get_current_locations.detect{|hash| hash[:slug] == slug}
  # end
  #
  # def self.get_department_from_slug(slug)
  #   get_current_departments.detect{|hash| hash[:slug] == slug}
  # end
  #
  # def self.get_location_name_from_slug(slug)
  #   get_location_from_slug(slug)[:name]
  # end
  #
  # def self.get_department_name_from_slug(slug)
  #   get_department_from_slug(slug)[:name]
  # end
  #
  # def self.get_region_by_slug(region_slug)
  #   region = OPTIONS[:regions].detect{|hash| hash[:slug] == region_slug}
  # end

end
