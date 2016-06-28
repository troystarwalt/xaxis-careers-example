class JobsJsonController < ApplicationController

  def index
    @jobs = JobviteService.get_all_jobs
  end

  def show
    jobs = JobviteService.get_all_jobs
    @job = jobs.jobvite_return['requisitions'].detect{|x| x['eId'] == params[:eId]}
  end

end
