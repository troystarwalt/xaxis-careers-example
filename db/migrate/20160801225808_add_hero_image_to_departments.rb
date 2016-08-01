class AddHeroImageToDepartments < ActiveRecord::Migration
  def change
    add_column :departments, :hero_image, :string
  end
end
