class RegionsController < ApplicationController
  before_filter :set_nav_items
  def index
    @title = "Xaxis Careers | Regions"
  end

  # GET /regions/1
  # GET /regions/1.json
  def show
    @region = Region.friendly.find(params[:id])
    @jobs = Rails.cache.fetch("jobs/regions/#{@region.slug}", expires_in: 1.hour) do
      JobListing.in_region(@region.slug)
    end
    @title = "Xaxis Careers | #{@region.name}"
  end

  private
    def region_params
      params.require(:region).permit(:name, :slug, :hero_image)
    end
end
