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

ActiveRecord::Schema.define(version: 20161110173415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.integer  "author_id"
    t.string   "author_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "departments", force: :cascade do |t|
    t.string   "name"
    t.string   "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "hero_image"
    t.integer  "job_count"
    t.integer  "position"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string   "slug",                      null: false
    t.integer  "sluggable_id",              null: false
    t.string   "sluggable_type", limit: 50
    t.string   "scope"
    t.datetime "created_at"
  end

  add_index "friendly_id_slugs", ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true, using: :btree
  add_index "friendly_id_slugs", ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", using: :btree
  add_index "friendly_id_slugs", ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id", using: :btree
  add_index "friendly_id_slugs", ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type", using: :btree

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
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  create_table "jobvite_updateds", force: :cascade do |t|
    t.boolean  "success",    default: false
    t.datetime "at_time",    default: '2016-11-10 17:35:12'
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.string   "slug"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "hero_image"
    t.integer  "job_count"
    t.integer  "region_id"
    t.integer  "position"
    t.boolean  "hub_city",   default: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "country"
  end

  add_index "locations", ["region_id"], name: "index_locations_on_region_id", using: :btree

  create_table "regions", force: :cascade do |t|
    t.string   "name"
    t.string   "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "hero_image"
    t.integer  "job_count"
    t.integer  "position"
  end

  add_foreign_key "locations", "regions"
end
