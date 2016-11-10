class JobListingsController < ApplicationController
  before_filter :set_nav_items, :retrieve_contact

  def index
    @title = "Xaxis Careers | All Listings"
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobListing.all
    end
    sub = ''
    if params[:department] && params[:department].present?
      @jobs = @jobs.where(department_param: params[:department])
      @department = Department.find_by_slug(params[:department])
      sub << @department.name
    end
    if params[:location] && params[:location].present?
      @jobs = @jobs.where(location_city_param: params[:location])
      @location = Location.find_by_slug(params[:location])
      if sub.length > 0
        sub << " in "
      end
      sub << @location.name
    end
    @subtitle = sub
    if @jobs.count <= 0
      loc = params[:location].capitalize
      dep = params[:department].capitalize
      flash[:notice] = "No jobs with the joint filter of: " + loc + " and " + dep
      redirect_to jobs_path
    end
  end

  def show
    @job = Rails.cache.fetch("job/#{params[:e_id]}", expires_in: 24.hour) do
      job = JobListing.find_by(e_id: params[:e_id])
      return redirect_to four_oh_four_path if job.nil?
      job
    end
    redirect_to four_oh_four_path if @job.nil?
    @title = "Xaxis Careers | " << @job.title
    @subtitle = @job.title
    if @job.private
      return redirect_to :back
    end
    @jobs = Rails.cache.fetch("jobs/departments/#{@job.department_param}",expires_in: 24.hour) do
      jobs = JobListing.in_department(@job.department_param)
    end
  end



  def force_pull_jobs
    return redirect_to root_path unless current_admin_user
    JobListing.force_pull_jobs!
    flash[:notice] = "It may take a minute for updates to take effect"
    redirect_to admin_dashboard_path
  end
end
