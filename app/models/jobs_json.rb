class JobsJson < ActiveRecord::Base

  OPTIONS = {
    locations: [
      'New York',
      'Location 2',
      'Location 3',
      'Location 4'
    ],
    categories: [
      'Administration',
      'Business Ops',
      'Ad Ops',
      'Content'
    ],
    departments: [
      'Tech',
      'Ads',
      'Sales',
      'Marketing'
    ]
  }.freeze
  
  def self.get_current_departments
    OPTIONS[:departments]
  end

  def self.get_current_categories
    OPTIONS[:categories]
  end

  def self.get_current_locations
    OPTIONS[:locations]
  end
end
