class JobListing < ActiveRecord::Base
  belongs_to :jobsjson
  scope :by_title, -> {order(:title)}
  before_create :set_location_finder


  private
  def set_location_finder
    self.locationFinder = self.locationCity.downcase.gsub(' ','-')
  end
end
