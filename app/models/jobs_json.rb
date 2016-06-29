class JobsJson < ActiveRecord::Base
  has_many :job_listings
  OPTIONS = {
    locations: [
      'New York',
      'Toronto',
      'Singapore',
      'Bogota',
      'Anzures',
      'Karlsruhe'
    ],
    departments: [
      'Account Management',
      'Ad Ops',
      'Analytics',
      'Creative',
      'Engineering',
      'Finance',
      'Publish Development',
      'Sales',
      'Strategy'
    ]
  }.freeze

  def self.get_current_departments
    OPTIONS[:departments]
  end

  def self.get_current_locations
    OPTIONS[:locations]
  end

  def self.select_by_location(jobs,location)
    jobs.select!{|job| job if job['locationCity'].downcase.gsub(' ','') == location}
  end

  def self.select_by_department(jobs,department)
    jobs.select!{|job| job if job['department'].downcase.gsub(' ','') == department}
  end
end
