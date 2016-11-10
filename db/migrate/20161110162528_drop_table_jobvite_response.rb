class DropTableJobviteResponse < ActiveRecord::Migration
  def change
    remove_column :job_listings, :jobvite_response_id
    drop_table :jobvite_responses
  end
end
