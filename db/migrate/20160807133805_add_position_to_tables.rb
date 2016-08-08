class AddPositionToTables < ActiveRecord::Migration
  def change
    add_column :locations, :position, :integer
    add_column :regions, :position, :integer
    add_column :departments, :position, :integer
  end
end
