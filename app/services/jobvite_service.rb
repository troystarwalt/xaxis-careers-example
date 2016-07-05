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
      return JobsJson.includes(:job_listings).last.job_listings
    else
      # if JobsJson.all.count > 0
      #   return JobsJson.includes(:job_listings).last.job_listings
      # else
        #for testing - no need to make api calls
        jobs = force_pull_jobs
        listings = jobs.jobvite_return['requisitions']
        create_jobs(listings, jobs.id)
        if JobsJson.all.count > 1
          JobsJson.first.destroy
        end
        return jobs.job_listings
      # end
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

  def self.create_jobs(requisitions_json, job_json_id)
    requisitions_json.each do |job|
      JobListing.create(jobs_json_id: job_json_id,
      eId: job['eId'].to_s.strip,
      applyLink: job['applyLink'].to_s.strip,
      briefDescription: job['briefDescription'].to_s.strip,
      category: job['category'].to_s.strip,
      approveDate: job['approveDate'].to_s.strip,
      closeDate: job['closeDate'].to_s.strip,
      department: job['department'].to_s.strip,
      description: job['description'].to_s.strip,
      internalOnly: job['internalOnly'].to_s.strip,
      jobState: job['jobState'].to_s.strip,
      locationCity: job['locationCity'].to_s.strip,
      locationCountry: job['locationCountry'].to_s.strip,
      locationPostalCode: job['locationPostalCode'].to_s.strip,
      locationState: job['locationState'].to_s.strip,
      postingType: job['postingType'].to_s.strip,
      private: job['private'].to_s.strip,
      title: job['title'].to_s.strip,
      subsidiaryName: job['subsidiaryName'].to_s.strip
       )
     end
  end
end
