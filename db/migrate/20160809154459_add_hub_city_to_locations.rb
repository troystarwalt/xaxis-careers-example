class AddHubCityToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :hub_city, :boolean, default: false
    main_locations = [
      "New York",
      "Chicago",
      "London",
      "Singapore"
    ]
    main_locations.each do |location|
      Location.find_by_name(location).update(hub_city: true)
    end
  end
end
