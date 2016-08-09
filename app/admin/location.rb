ActiveAdmin.register Location do

  form html: { :multipart => true } do |f|
    f.inputs "Location" do
      f.input :name
      f.input :slug
      f.input :hub_city
      f.input :hero_image, as: :file, :hint => f.object.hero_image.present? \
                                                ? image_tag(f.object.hero_image.url(:thumb))
                                                : content_tag(:span, "no hero image yet")
      if f.object.hero_image.present?
        f.input :remove_hero_image, as: :boolean, required: false, label: "Remove Image"
      end
      f.input :region
    end
    f.submit
  end

  permit_params do
    permitted = [:permitted, :attributes]
    permitted << [:hero_image, :name, :slug, :remove_hero_image, :region_id, :hub_city] if params[:action] == 'create' || params[:action] == 'update' && current_admin_user
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
    column :hub_city
    column :has_hero_image do |model|
      model.hero_image? ? status_tag( "yes", :ok ) : status_tag( "no" )
    end
    column :hero_image do |model|
      if model.hero_image?
        image_tag model.hero_image.url(:thumb)
      else
        image_tag model.region.hero_image.url(:thumb)
      end
    end
    column :region
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :region
      row :slug
      row :hub_city
      row :has_hero_image do |model|
        model.hero_image? ? status_tag( "yes", :ok ) : status_tag( "no" )
      end
      row :hero_image do |model|
        if model.hero_image?
          image_tag model.hero_image.url(:small)
        else
          image_tag model.region.hero_image.url(:small)
        end
      end
      row :hero_image_link do |model|
        if model.hero_image?
          model.hero_image.url
        else
          model.region.hero_image.url
        end
      end
    end
  end
end
