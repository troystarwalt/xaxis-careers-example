require 'net/http'
require 'json'

class JobviteService
  API_KEY = Rails.application.secrets.jobvite_api_key
  SECRET_KEY = Rails.application.secrets.jobvite_secret_key
  COMPANY_ID = Rails.application.secrets.jobvite_company_id
  PRODUCTION_URL = "https://api.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"
  STAGING_URL = "https://api-stg.jobvite.com/api/v2/job?api=#{API_KEY}&sc=#{SECRET_KEY}"


  #gets response, parses response.  if it's different, update everything, otherwise don't
  def self.force_pull_jobs
    response = get_response(PRODUCTION_URL)
    parsed_response = parse_response(response)
    if parsed_response['status']['code'] == 200
      create_or_update_listings(parsed_response['requisitions'])
      destroy_old_listings(parsed_response['requisitions'])
      update_job_counts
      JobviteUpdated.create(success: true)
      Rails.cache.clear
    else
      JobviteUpdated.create(success: false)
    end
    JobListing.all
  end

  private
  #gets api response
  def self.get_response url
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response
  end

  #parses api response to json
  def self.parse_response response
    parsed_response = JSON.parse(response)
    parsed_response
  end


#converts a requisition from jobvite to a job_listing on AR

  def self.create_or_update_listings requisitions
    puts "updating: #{requisitions.length} requisitions" if requisitions.length > 0
    requisitions.each do |job|
      job_attrs = {
        region: job['region'],
        region_param: job['region'].parameterize,
        bonus: job['bonus'],
        title: job['title'],
        job_type: job['jobType'],
        private: job['private'],
        category: job['category'],
        job_state: job['jobState'],
        location: job['location'],
        send_date: job['sendDate'],
        workflow: job['workflow'],
        apply_link: job['applyLink'],
        close_date: job['closeDate'],
        company_id: job['companyId'],
        job_source: job['jobSource'],
        department: job['department'],
        department_param: job['department'].parameterize,
        description: job['description'],
        posting_type: job['postingType'],
        distribution: job['distribution'],
        internal_only: job['internalOnly'],
        location_city: job['locationCity'],
        location_city_param: job['locationCity'].parameterize,
        subsidiary_id: job['subsidiaryId'],
        subsidiary_name: job['subsidiaryName'],
        location_state: job['locationState'],
        requisition_id: job['requisitionId'],
        last_updated_date: job['lastUpdatedDate'],
        location_country: job['locationCountry'],
        brief_description: job['briefDescription'],
        evaluation_form_name: job['evaluationFormName'],
        location_postal_code: job['locationPostalCode'],
        primary_hiring_manager_email: job['primaryHiringManagerEmail']
      }
      job_listing = JobListing.find_or_initialize_by(e_id: job['eId'])
      if job_listing && job_listing.update_attributes(job_attrs)
        job_listing.save
      end
    end
  end

  def self.destroy_old_listings requisitions
    current_e_ids = requisitions.map{|job| job["eId"]}
    old_listings = JobListing.all.count - current_e_ids.count
    puts "destroying #{old_listings} old listings"
    JobListing.where.not(e_id: current_e_ids).find_each(&:destroy)
  end

  def self.update_job_counts
    [Department,Location,Region].each do |klass|
      klass.update_job_counts
    end
  end

end
