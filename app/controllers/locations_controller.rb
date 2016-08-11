class LocationsController < ApplicationController
  before_filter :set_nav_items
  def index
    @title = "Xaxis Careers | Locations"
    gon.locations = JSON.parse(Location.all.to_json(include: :region))
  end

  def show
    @location = Location.friendly.find(params[:id])
    @jobs = Rails.cache.fetch("jobs/locations/#{@location.slug}", expires_in: 1.hour) do
      JobListing.in_location(@location.slug)
    end
    subtitle = @location.name
    @title = "Xaxis Careers | #{@location.name}"
  end

  private
    def location_params
      params.require(:location).permit(:name, :slug, :hero_image)
    end
end
