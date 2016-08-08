class SearchesController < ApplicationController

  def index
    # @jobs = JobListing.all
    if params[:search]
      @jobs = JobListing.search(params[:search]).order("created_at DESC")
    else
      @jobs = JobListing.all.order('created_at DESC')
    end
  end
end
