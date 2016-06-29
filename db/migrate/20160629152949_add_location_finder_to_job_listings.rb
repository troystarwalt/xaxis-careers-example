class AddLocationFinderToJobListings < ActiveRecord::Migration
  def change
    add_column :job_listings, :locationFinder, :string
  end
end
