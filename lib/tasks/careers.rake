namespace :careers do
  task pull_jobs: :environment do
    PullCareersJob.perform_later
  end
end
