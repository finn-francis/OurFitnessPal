class CreateExerciseUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_units do |t|
      t.string :name
      t.integer :default_unit_of_measure

      t.timestamps
    end
    add_index :exercise_units, [:name], unique: true
  end
end
