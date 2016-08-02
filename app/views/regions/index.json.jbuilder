json.array!(@regions) do |region|
  json.extract! region, :id, :name, :slug
  json.url region_url(region, format: :json)
end
