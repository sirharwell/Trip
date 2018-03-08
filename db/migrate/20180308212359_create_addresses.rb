class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :state
      t.integer :zip
      t.string :street
      t.belongs_to :stop, foreign_key: true

      t.timestamps
    end
  end
end
