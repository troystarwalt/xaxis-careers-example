class JobviteResponseController < ApplicationController

  def index
    @title = "Xaxis Careers"
    # @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
    #   JobListing.all
    # end
    @regions = Region.all
    @departments = Department.all
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
    JobviteResponse.force_pull_jobs!
    flash[:notice] = "It may take a minute for updates to take effect"
    redirect_to admin_dashboard_path
  end

end
