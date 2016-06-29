class JobsJsonController < ApplicationController

  def index
    @jobs = Rails.cache.fetch('jobs',expires_in: 1.hour) do
      JobviteService.get_all_jobs
    end
    if params[:location]
      JobsJson.select_by_location(@jobs,params[:location])
    end
    if params[:department]
      JobsJson.select_by_department(@jobs,params[:department])
    end
  end

  def show
    @job = Rails.cache.fetch("job/#{params[:eId]}", expires_in: 1.hour) do
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

end
