class JobsJsonController < ApplicationController

  def index
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobviteService.get_all_jobs
    end
    if params[:location]
      @jobs = @jobs.where(locationCity: params[:location].gsub('-',' ').titleize)
    end
    if params[:department]
      @jobs = @jobs.where(department: params[:department].gsub('-',' ').titleize)
    end
  end

  def show
    @job = Rails.cache.fetch("job/#{params[:eId]}", expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs.detect{|x| x['eId'] == params[:eId]}
    end
  end

  def culture
  end

  def benefits
  end

  def mobility
  end

  def region_index
    @jobs = Rails.cache.fetch("jobs/region/#{params[:region]}",expires_in: 24.hour) do
      region = JobsJson.get_region_by_slug(params[:region])
      JobsJson.get_openings_by_region(region)
    end
  end

end
