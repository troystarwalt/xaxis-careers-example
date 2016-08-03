ActiveAdmin.register JobListing do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  controller do
    actions :index, :show
  end

  index do
    column :id
    column 'eId' do |model|
      model.e_id
    end
    column :title
    column :subsidiary_name
    column :category
    column :department
    column :location_city
    column :location_state
    column :location_postal_code
    column :location_country
    column :region
    column :brief_description do |model|
      ActionView::Base.full_sanitizer.sanitize(model.brief_description)
    end
    column :bonus
    column :job_type
    column :private
    column :job_state
    column :location
    column :send_date
    column :workflow
    column :apply_link
    column :close_date
    column :company_id
    column :job_source
    #column :description
    column :posting_type
    column :distribuion
    column :internal_only
    column :subsidiary_id
    column :requisition_id
    column :last_updated_date
    column :evaluation_form_name
    column :primary_hiring_manager_email
    actions
  end

end
