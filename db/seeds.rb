# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

locations = [
  {
    name: 'New York',
    slug: 'new-york'
  },
  {
    name: 'Chicago',
    slug: 'chicago'
  },
  {
    name: 'Toronto',
    slug: 'toronto'
  },
  {
    name: 'London',
    slug: 'london'
  },
  {
    name: 'Singapore',
    slug: 'singapore'
  },
  {
    name: 'Bogota',
    slug: 'bogota'
  },
  {
    name: 'Anzures',
    slug: 'anzures'
  },
  {
    name: 'Karlsruhe',
    slug: 'karlsruhe'
  }
]

locations.each do |location|
  Location.create(name: location[:name], slug: location[:slug])
end

departments = [
  {
    name: 'Account Management',
    slug: 'account-management'
  },
  {
    name: 'Ad Ops',
    slug: 'ad-ops'
  },
  {
    name: 'Analytics',
    slug: 'analytics'
  },
  {
    name: 'Automated Trading',
    slug: 'automated-trading'
  },
  {
    name: 'Business Development',
    slug: 'business-development'
  },
  {
    name: 'Creative',
    slug: 'creative'
  },
  {
    name: 'Engineering',
    slug: 'engineering'
  },
  {
    name: 'Finance',
    slug: 'finance'
  },
  {
    name: 'Legal',
    slug: 'legal'
  },
  {
    name: 'Office Services',
    slug: 'office-services'
  },
  {
    name: 'Product',
    slug: 'product'
  },
  {
    name: 'Publisher Development',
    slug: 'publisher-development'
  },
  {
    name: 'Sales',
    slug: 'sales'
  },
  {
    name: 'Strategy & Investment',
    slug: 'strategy-investment'
  }
]

departments.each do |department|
  Department.create(name: department[:name], slug: department[:slug])
end

regions = [
  {
    name: "North America",
    slug: 'north-america'
  },
  {
    name: "Latin America",
    slug: 'latin-america'
  },
  {
    name: "Europe, Middle East and Africa",
    slug: 'europe-middle-east'
  },
  {
    name: "Asia Pacific",
    slug: 'asia-pacific'
  }
]

regions.each do |region|
  Region.create(name: region[:name], slug: region[:slug])
end
