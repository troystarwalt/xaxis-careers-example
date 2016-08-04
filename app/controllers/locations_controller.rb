class LocationsController < ApplicationController

  def index
    @regions = Region.all
    @locations = Location.all
  end

  # GET /locations/1
  # GET /locations/1.json
  def show
    @regions = Region.all
    @location = Location.friendly.find(params[:id])
    @jobs = Rails.cache.fetch("jobs/locations/#{@location.slug}", expires_in: 1.hour) do
      JobListing.in_location(@location.slug)
    end
    subtitle = @location.name
  end

  private
    def location_params
      params.require(:location).permit(:name, :slug, :hero_image)
    end
end
