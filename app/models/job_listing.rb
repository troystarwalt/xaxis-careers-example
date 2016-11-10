class JobListing < ActiveRecord::Base
  before_validation :clean_data
  scope :visible, -> {where(private: false)}
  scope :in_region, -> (region){where(region_param: region.parameterize)}
  scope :in_department, -> (department){where(department_param: department)}
  scope :in_location, -> (location){where(location_city_param: location)}
  def self.search(search)
    keys = "#{search}".to_s.downcase
    keys_cleaned_and_separated = keys.strip.split.map { |x| "%#{x}%" }
    # Add additional columns below to search those.
    columns = %w{title region location}
    search_array = []
    columns.each do |c|
      keys_cleaned_and_separated.each do |term|
        search_array << "lower(#{c}) ~~* '#{term}'"
      end
    end
    JobListing.where(search_array.join(' OR '))
  end

  def self.force_pull_jobs!
    PullCareersJob.perform_async
  end

  private
  def clean_data
    # trim whitespace from beginning and end of string attributes
    attribute_names.each do |name|
      if send(name).respond_to?(:strip)
        send("#{name}=", send(name).strip)
      end
    end
  end
end
