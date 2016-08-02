class AddJobCountToRegions < ActiveRecord::Migration
  def change
    add_column :regions, :job_count, :integer
  end
end
