class CreateJobviteUpdateds < ActiveRecord::Migration
  def change
    create_table :jobvite_updateds do |t|
      t.boolean :success, default: false
      t.datetime :at_time, default: Time.now

      t.timestamps null: false
    end
  end
end
