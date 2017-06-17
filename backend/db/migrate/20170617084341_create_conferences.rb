class CreateConferences < ActiveRecord::Migration[5.0]
  def change
    create_table :conferences do |t|
      t.string :name
      t.text :description
      t.date :startTime
      t.date :endTime
      t.boolean :isPrivate

      t.timestamps
    end
  end
end
