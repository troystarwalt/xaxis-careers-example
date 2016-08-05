class JobviteResponse < ActiveRecord::Base
  has_many :job_listings, dependent: :destroy

  def get_created_at
    created_at.localtime.strftime("%I:%M %p on %D")
  end

  def self.force_update_warning
    time = Time.now.localtime
    last_updated_time = JobviteResponse.last.created_at.localtime
    minutes_since_update = ((time - last_updated_time) / 60).to_i
    output_string = "Are you sure? The last update was at #{JobviteResponse.last.get_created_at}, only #{minutes_since_update} minutes ago. Forcing updates too often my result in rate-limiting from Jobvite."
  end

  def self.force_pull_jobs!
    PullCareersJob.perform_async
  end
end
