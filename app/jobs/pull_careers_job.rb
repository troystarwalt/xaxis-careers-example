class PullCareersJob
  include Sidekiq::Worker

  def perform
    JobviteService.force_pull_jobs
  end
end
