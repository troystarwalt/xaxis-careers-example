class JobsJsonController < ApplicationController

  def index
    @jobs = Rails.cache.fetch('jobs',expires_in: 24.hour) do
      JobviteService.get_all_jobs
    end
    if params[:location]
      @jobs = @jobs.where(locationFinder: params[:location])
    end
    # if params[:department]
    #   @jobs = @jobs.where("lower(department) == ?", params[:department])
    # end
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

end
