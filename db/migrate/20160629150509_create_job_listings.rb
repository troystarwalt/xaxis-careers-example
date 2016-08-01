class CreateJobListings < ActiveRecord::Migration
  def change
    create_table :job_listings do |t|
      t.string :e_id
      t.string :region
      t.string :bonus
      t.string :title
      t.string :job_type
      t.boolean :private
      t.string :category
      t.string :job_state
      t.string :location
      t.integer :send_date, limit: 8
      t.string :workflow
      t.string :apply_link
      t.integer :close_date, limit: 8
      t.string :company_id
      t.string :job_source
      t.string :department
      t.text :description
      t.string :posting_type
      t.boolean :distribution
      t.boolean :internal_only
      t.string :location_city
      t.string :location_city_param
      t.string :subsidiary_id
      t.string :subsidiary_name
      t.string :location_state
      t.string :requisition_id
      t.integer :last_updated_date, limit: 8
      t.string :location_country
      t.text :brief_description
      t.string :evaluation_form_name
      t.string :location_postal_code
      t.string :primary_hiring_manager_email
      t.string :department_param
      t.string :region_param
      t.references :jobvite_response, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
