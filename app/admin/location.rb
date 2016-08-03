ActiveAdmin.register Location do

  form html: { :multipart => true } do |f|
    f.inputs "Location" do
      f.input :name
      f.input :slug
      f.input :hero_image, as: :file, :hint => f.object.hero_image.present? \
                                                ? image_tag(f.object.hero_image.url(:thumb))
                                                : content_tag(:span, "no hero image yet")
      if f.object.hero_image.present?
        f.input :remove_hero_image, as: :boolean, required: false, label: "Remove Image"
      end
    end
    f.submit
  end

  permit_params do
    permitted = [:permitted, :attributes]
    permitted << [:hero_image, :name, :slug, :remove_hero_image] if params[:action] == 'create' || params[:action] == 'update' && current_admin_user
    permitted
  end

  controller do
    def find_resource
      scoped_collection.friendly.find(params[:id])
    end
  end


  index do
    column :id
    column :name
    column :slug
    column :hero_image do |model|
      image_tag model.hero_image.url(:thumb)
    end
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :slug
      row :hero_image do |model|
        image_tag model.hero_image.url(:small)
      end
      row :hero_image_link do |model|
        model.hero_image.url
      end
    end
  end
end
