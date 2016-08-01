class AddHeroImageToRegions < ActiveRecord::Migration
  def change
    add_column :regions, :hero_image, :string
  end
end
