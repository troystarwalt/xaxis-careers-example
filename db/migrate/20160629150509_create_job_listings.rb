class CreateJobListings < ActiveRecord::Migration
  def change
    create_table :job_listings do |t|
      t.string :eId
      t.string :applyLink
      t.string :briefDescription
      t.string :category
      t.datetime :approveDate
      t.datetime :closeDate
      t.string :department
      t.text :description
      t.boolean :internalOnly
      t.string :jobState
      t.string :locationCity
      t.string :locationCountry
      t.string :locationPostalCode
      t.string :locationState
      t.string :postingType
      t.boolean :private
      t.string :title
      t.references :jobs_json, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
