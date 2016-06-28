class CreateJobsJsons < ActiveRecord::Migration
  def change
    create_table :jobs_jsons do |t|
      t.jsonb :jobvite_return

      t.timestamps null: false
    end
  end
end
