class PullCareersJob < ActiveJob::Base
  @queue = :service

  def perform
    JobviteService.force_pull_jobs
  end
end
