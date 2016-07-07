class Careers::JobsJsonController < ApplicationController

  def index
    @title = "Xaxis Careers"
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobviteService.get_all_jobs
    end
    @jobs = @jobs.by_title.listed
    if params[:location]
      @title << " | #{params[:location].gsub('-',' ').titleize}"
      @jobs = @jobs.where(locationCity: params[:location].gsub('-',' ').titleize)
    end
    if params[:department]
      @title << " | #{params[:department].gsub('-',' ').titleize}"
      @jobs = @jobs.where(department: params[:department].gsub('-',' ').titleize)
    end
  end

  def departments
    @title = "Xaxis Careers | Departments"
    @jobs = Rails.cache.fetch("jobs/departments}",expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs = jobs.by_title.listed
    end
  end

  def show
    @job = Rails.cache.fetch("job/#{params[:eId]}", expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs.detect{|x| x['eId'] == params[:eId]}
    end
    @title = "Xaxis Careers | " << @job.title
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
    @title = "Xaxis Careers | Culture"
  end

  def benefits
    @title = "Xaxis Careers | Benefits"
  end

  def mobility
    @title = "Xaxis Careers | Mobility"
  end

  def region_index
    @title = "Xaxis Careers | Regions"
    @jobs = Rails.cache.fetch("jobs/region/#{params[:region]}",expires_in: 24.hour) do
      region = JobsJson.get_region_by_slug(params[:region])
      JobsJson.get_openings_by_region(region)
    end
    @jobs = @jobs.by_title.listed
  end

end
