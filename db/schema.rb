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

ActiveRecord::Schema.define(version: 20160629154821) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "job_listings", force: :cascade do |t|
    t.string   "eId"
    t.string   "applyLink"
    t.string   "briefDescription"
    t.string   "category"
    t.datetime "approveDate"
    t.datetime "closeDate"
    t.string   "department"
    t.text     "description"
    t.boolean  "internalOnly"
    t.string   "jobState"
    t.string   "locationCity"
    t.string   "locationCountry"
    t.string   "locationPostalCode"
    t.string   "locationState"
    t.string   "postingType"
    t.boolean  "private"
    t.string   "title"
    t.integer  "jobs_json_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "locationFinder"
    t.string   "subsidiaryName"
  end

  add_index "job_listings", ["jobs_json_id"], name: "index_job_listings_on_jobs_json_id", using: :btree

  create_table "jobs_jsons", force: :cascade do |t|
    t.jsonb    "jobvite_return"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_foreign_key "job_listings", "jobs_jsons"
end
