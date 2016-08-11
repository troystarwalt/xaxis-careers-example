class SearchesController < ApplicationController
  before_filter :set_nav_items
  def index
    params[:search] = params[:search].strip.downcase
    @title = "Xaxis Careers | " + params[:search].capitalize
    if params[:search].present?
      @jobs = Rails.cache.fetch("jobs/search/#{params[:search]}", expires_in: 24.hours) do
        JobListing.search(params[:search]).order("title DESC")
      end
      puts @jobs.last && "HI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
      if @jobs.blank?
        flash[:alert] = "No results that include the term(s): " + params[:search]
        redirect_to jobs_path
      else
        flash[:notice] = "Returning results that include term(s): " + params[:search]
      end
    end
  end
end
