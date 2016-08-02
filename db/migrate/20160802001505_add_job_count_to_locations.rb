class AddJobCountToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :job_count, :integer
  end
end
