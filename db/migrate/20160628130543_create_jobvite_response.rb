class CreateJobviteResponse < ActiveRecord::Migration
  def change
    create_table :jobvite_responses do |t|
      t.jsonb :response
      t.string :status
      t.timestamps null: false
    end
  end
end
