class SearchesController < ApplicationController
    before_filter :set_nav_items
  def index
    @title = "Xaxis Careers | " + params[:search]
    if params[:search]
      @jobs = JobListing.search(params[:search]).order("title DESC")
    else
      @jobs = JobListing.all.order('title DESC')
    end
  end
end
