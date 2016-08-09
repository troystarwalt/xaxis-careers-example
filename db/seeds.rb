# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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

locations = [
  {
    name: 'New York',
    slug: 'new-york',
    region_slug: 'north-america',
    hub_city: true
  },
  {
    name: 'Chicago',
    slug: 'chicago',
    region_slug: 'north-america',
    hub_city: true
  },
  {
    name: 'Toronto',
    slug: 'toronto',
    region_slug: 'north-america',
    hub_city: false
  },
  {
    name: 'London',
    slug: 'london',
    region_slug: 'europe-middle-east',
    hub_city: true
  },
  {
    name: 'Singapore',
    slug: 'singapore',
    region_slug: 'asia-pacific',
    hub_city: true
  },
  {
    name: 'Bogota',
    slug: 'bogota',
    region_slug: 'latin-america',
    hub_city: true
  },
  {
    name: 'Anzures',
    slug: 'anzures',
    region_slug: 'latin-america',
    hub_city: false
  },
  {
    name: 'Karlsruhe',
    slug: 'karlsruhe',
    region_slug: 'europe-middle-east',
    hub_city: false
  }
]

locations.each do |location|
  region = Region.find_by(slug: location[:region_slug])
  region.locations.create(name: location[:name], hub_city: location[:hub_city])
end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
