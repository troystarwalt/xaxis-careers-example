class JobsJson < ActiveRecord::Base
  has_many :job_listings, dependent: :destroy
  OPTIONS = {
    locations: [
      {
        name: 'New York',
        hero_image: '',
        slug: 'new-york'
      },
      {
        name: 'Toronto',
        hero_image: '',
        slug: 'toronto'
      },
      {
        name: 'Singapore',
        hero_image: '',
        slug: 'singapore'
      },
      {
        name: 'Bogota',
        hero_image: '',
        slug: 'bogota'
      },
      {
        name: 'Anzures',
        hero_image: '',
        slug: 'anzures'
      },
      {
        name: 'Karlsruhe',
        hero_image: '',
        slug: 'karlsruhe'
      }
    ],
    departments: [
      {
        name: 'Account Management',
        hero_image: '',
        slug: 'account-management'
      },
      {
        name: 'Ad Ops',
        hero_image: '',
        slug: 'ad-ops'
      },
      {
        name: 'Analytics',
        hero_image: '',
        slug: 'analytics'
      },
      {
        name: 'Creative',
        hero_image: '',
        slug: 'creative'
      },
      {
        name: 'Engineering',
        hero_image: '',
        slug: 'engineering'
      },
      {
        name: 'Finance',
        hero_image: '',
        slug: 'finance'
      },
      {
        name: 'Publisher Development',
        hero_image: '',
        slug: 'publisher-development'
      },
      {
        name: 'Sales',
        hero_image: '',
        slug: 'sales'
      },
      {
        name: 'Strategy',
        hero_image: '',
        slug: 'strategy'
      }
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
