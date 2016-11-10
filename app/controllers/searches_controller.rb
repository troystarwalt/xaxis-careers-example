class SearchesController < ApplicationController
  before_filter :set_nav_items, :retrieve_contact
  def index
    unless params[:q].present?
      flash[:alert] = "Click on the search icon to search."
      redirect_to root_path
    end
    if params[:q].present?
          params[:q] = params[:q].strip.downcase
          @title = "Xaxis Careers | " + params[:q].capitalize
      @jobs = Rails.cache.fetch("jobs/search/#{params[:q]}", expires_in: 24.hours) do
        JobListing.search(params[:q]).order("title DESC")
      end
      if @jobs.blank?
        flash[:error] = "No results that include term(s): " + params[:q]
        redirect_to jobs_path
        puts flash.keys
      else
        flash.now[:notice] = "Returning results that include term(s): " + params[:q]
      end
    end
  end
end
