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
      #return JobsJson.last.jobvite_return['requisitions']
      return JobsJson.last.job_listings
    else
      if JobsJson.all.count > 0
        return JobsJson.last.job_listings
      else
        #for testing - no need to make api calls
        jobs = force_pull_jobs
        listings = jobs.jobvite_return['requisitions']
        create_jobs(listings)
        if JobsJson.all.count > 1
          JobsJson.first.destroy
        end
        return jobs.job_listings
      end
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

  def self.create_jobs(requisitions_json)
    requisitions_json.each do |job|
      JobListing.create(jobs_json_id: jobs_json.id,
      eId: job['eId'],
      applyLink: job['applyLink'],
      briefDescription: job['briefDescription'],
      category: job['category'],
      approveDate: job['approveDate'],
      closeDate: job['closeDate'],
      department: job['department'],
      description: job['description'],
      internalOnly: job['internalOnly'],
      jobState: job['jobState'],
      locationCity: job['locationCity'],
      locationCountry: job['locationCountry'],
      locationPostalCode: job['locationPostalCode'],
      locationState: job['locationState'],
      postingType: job['postingType'],
      private: job['private'],
      title: job['title'],
      subsidiaryName: job['subsidiaryName']
       )
     end
  end
end
