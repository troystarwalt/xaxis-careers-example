class SearchesController < ApplicationController
  before_filter :set_nav_items
  def index
    unless params[:search].present?
      flash[:alert] = "Click on the search icon to search."
      redirect_to root_path
    end
    if params[:search].present?
          params[:search] = params[:search].strip.downcase
          @title = "Xaxis Careers | " + params[:search].capitalize
      @jobs = Rails.cache.fetch("jobs/search/#{params[:search]}", expires_in: 24.hours) do
        JobListing.search(params[:search]).order("title DESC")
      end
      if @jobs.blank?
        flash[:alert] = "No results that include term(s): " + params[:search]
        redirect_to jobs_path
      else
        flash.now[:notice] = "Returning results that include term(s): " + params[:search]
      end
    end
  end
end
