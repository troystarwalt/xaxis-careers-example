class SearchesController < ApplicationController
    before_filter :set_nav_items
  def index
    unless params[:search].present?
      flash[:notice] = "Invalid Search"
      redirect_to jobs_path
    end
    params[:search] = params[:search].strip.downcase
    @title = "Xaxis Careers | " + params[:search].capitalize
    if params[:search].present?
      @jobs = Rails.cache.fetch("jobs/search/#{params[:search]}", expires_in: 24.hours) do
        JobListing.search(params[:search]).order("title DESC")
      end
    end
  end
end
