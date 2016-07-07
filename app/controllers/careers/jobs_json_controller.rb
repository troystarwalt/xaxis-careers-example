class Careers::JobsJsonController < ApplicationController

  def index
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobviteService.get_all_jobs
    end
    @jobs = @jobs.by_title.listed
    if params[:location]
      @jobs = @jobs.where(locationCity: params[:location].gsub('-',' ').titleize)
    end
    if params[:department]
      @jobs = @jobs.where(department: params[:department].gsub('-',' ').titleize)
    end
  end

  def departments
    @jobs = Rails.cache.fetch("jobs/#{params[:department]}",expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs = jobs.by_title.listed
    end
  end

  def show
    @job = Rails.cache.fetch("job/#{params[:eId]}", expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs.detect{|x| x['eId'] == params[:eId]}
    end
    @subtitle = @job.title
    if @job.private
      return redirect_to :back
    end
    @jobs = Rails.cache.fetch("jobs/#{@job.department}",expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs = jobs.by_title.listed.where(department: @job.department)
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
    @jobs = @jobs.by_title.listed
  end

end
