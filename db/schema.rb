# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160629150509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "job_listings", force: :cascade do |t|
    t.string   "e_id"
    t.string   "region"
    t.string   "bonus"
    t.string   "title"
    t.string   "job_type"
    t.boolean  "private"
    t.string   "category"
    t.string   "job_state"
    t.string   "location"
    t.integer  "send_date",                    limit: 8
    t.string   "workflow"
    t.string   "apply_link"
    t.integer  "close_date",                   limit: 8
    t.string   "company_id"
    t.string   "job_source"
    t.string   "department"
    t.text     "description"
    t.string   "posting_type"
    t.boolean  "distribution"
    t.boolean  "internal_only"
    t.string   "location_city"
    t.string   "location_city_param"
    t.string   "subsidiary_id"
    t.string   "subsidiary_name"
    t.string   "location_state"
    t.string   "requisition_id"
    t.integer  "last_updated_date",            limit: 8
    t.string   "location_country"
    t.text     "brief_description"
    t.string   "evaluation_form_name"
    t.string   "location_postal_code"
    t.string   "primary_hiring_manager_email"
    t.string   "department_param"
    t.string   "region_param"
    t.integer  "jobvite_response_id"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "job_listings", ["jobvite_response_id"], name: "index_job_listings_on_jobvite_response_id", using: :btree

  create_table "jobvite_responses", force: :cascade do |t|
    t.jsonb    "response"
    t.string   "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "job_listings", "jobvite_responses"
end
