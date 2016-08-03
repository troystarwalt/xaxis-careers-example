ActiveAdmin.register JobviteResponse do

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
    column :last_response do |model|
      "<pre>#{JSON.pretty_generate(model.response)}</pre>".html_safe
    end
  end
end
