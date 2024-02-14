class CreateAccountVehicles < ActiveRecord::Migration[7.2]
  def change
    create_table :account_vehicles, id: :uuid do |t|
      t.string :make
      t.string :model
      t.integer :year
      
      t.timestamps
    end
  end
end
