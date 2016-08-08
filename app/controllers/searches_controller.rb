class SearchesController < ApplicationController

  def index
    # @jobs = JobListing.all
    @title = "Xaxis Careers | " + params[:search]
    @regions = Region.all.order(:id)
    @departments = Department.all.order(:name)
    @locations = Location.all.order(:name)
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobListing.all
    end
      if params[:search]
        @jobs = JobListing.search(params[:search]).order("created_at DESC")
      else
        @jobs = JobListing.all.order('created_at DESC')
      end
    end
  end
