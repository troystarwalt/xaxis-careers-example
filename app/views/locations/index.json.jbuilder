json.array!(@locations) do |location|
  json.extract! location, :id, :name, :slug
  json.url location_url(location, format: :json)
end
