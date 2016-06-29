require 'net/http'
require 'json'

class JobviteService
  API_KEY = Rails.application.secrets.jobvite_api_key
  SECRET_KEY = Rails.application.secrets.jobvite_secret_key
  COMPANY_ID = Rails.application.secrets.jobvite_company_id
  PRODUCTION_URL = "https://api.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"
  STAGING_URL = "https://api-stg.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"

  def self.get_all_jobs
    if JobsJson.last && JobsJson.last.created_at > Time.now - 1.hour
      return JobsJson.last.jobvite_return['requisitions']
    else
      #for testing - no need to make api calls
      return JobsJson.last.jobvite_return['requisitions']
      #run this as a background job that hits every hour
      # jobs = force_pull_jobs
      # return jobs.jobvite_return['requisitions']
    end
  end

  def self.force_pull_jobs
    response = get_response(PRODUCTION_URL)
    parsed_response = parse_response(response)
    update_jobs_table(parsed_response)
  end

  private
  def self.get_response url
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response
  end

  def self.parse_response response
    parsed_response = JSON.parse(response)
    parsed_response
  end

  def self.update_jobs_table json_response
    JobsJson.create(jobvite_return: json_response)
  end

end
