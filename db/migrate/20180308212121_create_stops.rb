class CreateStops < ActiveRecord::Migration[5.1]
  def change
    create_table :stops do |t|
      t.string :name
      t.belongs_to :trip, foreign_key: true

      t.timestamps
    end
  end
end
