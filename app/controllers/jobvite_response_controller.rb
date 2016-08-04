class JobviteResponseController < ApplicationController

  def index
    @title = "Xaxis Careers"
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobListing.all
    end
  end


  def show
    @job = Rails.cache.fetch("job/#{params[:e_id]}", expires_in: 24.hour) do
      JobListing.find_by(e_id: params[:e_id])
    end
    @title = "Xaxis Careers | " << @job.title
    @subtitle = @job.title
    if @job.private
      return redirect_to :back
    end
    @jobs = Rails.cache.fetch("jobs/departments/#{@job.department_param}",expires_in: 24.hour) do
      jobs = JobListing.in_department(@job.department_param)
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

  def force_pull_jobs
    return redirect_to root_path unless current_admin_user
    JobviteResponse.force_pull_jobs!
    flash[:notice] = "It may take a minute for updates to take effect"
    redirect_to admin_dashboard_path
  end

end
