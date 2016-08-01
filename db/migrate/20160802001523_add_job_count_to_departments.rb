class AddJobCountToDepartments < ActiveRecord::Migration
  def change
    add_column :departments, :job_count, :integer
  end
end
