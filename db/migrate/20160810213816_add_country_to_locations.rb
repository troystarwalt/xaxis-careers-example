class AddCountryToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :country, :string

    locations = [
      {
        name: 'New York',
        slug: 'new-york',
        region_slug: 'north-america',
        hub_city: true,
        country: "US"
      },
      {
        name: 'Chicago',
        slug: 'chicago',
        region_slug: 'north-america',
        hub_city: true,
        country: "US"
      },
      {
        name: 'Toronto',
        slug: 'toronto',
        region_slug: 'north-america',
        hub_city: false,
        country: "CA"
      },
      {
        name: 'London',
        slug: 'london',
        region_slug: 'europe-middle-east',
        hub_city: true,
        country: "UK"
      },
      {
        name: 'Singapore',
        slug: 'singapore',
        region_slug: 'asia-pacific',
        hub_city: true,
        country: "SG"
      },
      {
        name: 'Bogota',
        slug: 'bogota',
        region_slug: 'latin-america',
        hub_city: true,
        country: "CO"
      },
      {
        name: 'Anzures',
        slug: 'anzures',
        region_slug: 'latin-america',
        hub_city: false,
        country: "MX"
      },
      {
        name: 'Karlsruhe',
        slug: 'karlsruhe',
        region_slug: 'europe-middle-east',
        hub_city: false,
        country: "DE"
      }
    ]

    locations.each do |loc|
      Location.find_by_slug(loc[:slug]).update(country: loc[:country])
    end
  end
end
