class SearchesController < ApplicationController
    before_filter :set_nav_items
  def index
    params[:search].strip!.downcase!
    @title = "Xaxis Careers | " + params[:search].capitalize
    if params[:search]
      @jobs = Rails.cache.fetch("jobs/search/#{params[:search]}", expires_in: 24.hours) do
        JobListing.search(params[:search]).order("title DESC")
      end
    else
      @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
        JobListing.all
      end
    end
  end
end
