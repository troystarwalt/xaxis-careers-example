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
    ],
    regions: [
      {
        name: "North America",
        display: "NORTH<br>AMERICA",
        link: "/careers/regions/north-america",
        slug: 'north-america',
        countries: ['United States', 'Canada']
      },
      {
        name: "Latin America",
        display: "LATIN<br>AMERICA",
        link: "/careers/regions/latin-america",
        slug: 'latin-america',
        countries: ['Colombia','Mexico']
      },
      {
        name: "Europe, Middle East and Africa",
        display: "EUROPE, MIDDLE EAST AND AFRICA",
        link: "/careers/regions/europe-middle-east-africa",
        slug: 'europe-middle-east-africa',
        countries: ["United Kingdom",'Germany']
      },
      {
        name: "Asia Pacific",
        display: "ASIA<br>PACIFIC",
        link: "/careers/regions/asia-pacific",
        slug: 'asia-pacific',
        countries: ["Singapore"]
      }
    ]
  }.freeze

  def self.get_regions
    OPTIONS[:regions]
  end

  def self.get_region_by_name(region_name)
    OPTIONS[:regions].detect{|hash| hash[:slug] == hash[region_name]}
  end

  def self.get_current_departments
    OPTIONS[:departments]
  end

  def self.get_current_locations
    OPTIONS[:locations]
  end

  def self.get_location_from_slug(slug)
    get_current_locations.detect{|hash| hash[:slug] == slug}
  end

  def self.get_department_from_slug(slug)
    get_current_departments.detect{|hash| hash[:slug] == slug}
  end

  def self.get_location_name_from_slug(slug)
    get_location_from_slug(slug)[:name]
  end

  def self.get_department_name_from_slug(slug)
    get_department_from_slug(slug)[:name]
  end

  def self.select_by_location(jobs,location)
    jobs.select!{|job| job if job['locationCity'].downcase.gsub(' ','') == location}
  end

  def self.select_by_department(jobs,department)
    jobs.select!{|job| job if job['department'].downcase.gsub(' ','') == department}
  end

  def self.get_region_by_slug(region_slug)
    region = OPTIONS[:regions].detect{|hash| hash[:slug] == region_slug}
  end

  scope :get_openings_by_region, -> (region){last.job_listings.where(locationCountry: region[:countries])}


end
