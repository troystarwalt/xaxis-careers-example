class AddHeroImageToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :hero_image, :string
  end
end
