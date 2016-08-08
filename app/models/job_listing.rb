class JobListing < ActiveRecord::Base
  belongs_to :jobvite_response
  before_validation :clean_data
  scope :visible, -> {where(private: false)}
  scope :in_region, -> (region){where(region_param: region.parameterize)}
  scope :in_department, -> (department){where(department_param: department)}
  scope :in_location, -> (location){where(location_city_param: location)}

  def self.search(search)
    key = "%#{search}%"
    # Add additional columns below to search those.
    columns = %w{title region location}
    @jobs = JobListing.where(
    columns
      .map {|c| "#{c} like :search"}
      .join(' OR '),
      search: key
    )
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
