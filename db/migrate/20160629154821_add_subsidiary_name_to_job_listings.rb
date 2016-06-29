class AddSubsidiaryNameToJobListings < ActiveRecord::Migration
  def change
    add_column :job_listings, :subsidiaryName, :string
  end
end
