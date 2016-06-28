require 'net/http'
require 'json'

class JobviteService
  API_KEY = 'xaxis_jobfeedapi_key'
  SECRET_KEY = '8d20234079fdcde1dc876726e9aa3817'
  COMPANY_ID = 'qMVaVfww'

  PRODUCTION_URL = "https://api.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"
  STAGING_URL = "https://api-stg.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"

  def self.get_all_jobs
    uri = URI(PRODUCTION_URL)
    if JobsJson.last && JobsJson.last.created_at > Time.now - 1.hour
      return JobsJson.last
    else
      json_returned = Net::HTTP.get(uri)
      parsed_response = JSON.parse(json_returned)
      JobsJson.create(jobvite_return: parsed_response)
    end
  end

end
