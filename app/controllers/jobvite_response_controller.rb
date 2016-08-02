class JobviteResponseController < ApplicationController

  def index
    @title = "Xaxis Careers"
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobviteService.get_all_jobs
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
    @jobs = Rails.cache.fetch("jobs/#{@job.department}",expires_in: 24.hour) do
      jobs = JobviteService.get_all_jobs
      jobs = jobs.in_department(@job.department_param)
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


end
