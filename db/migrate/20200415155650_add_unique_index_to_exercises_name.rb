class AddUniqueIndexToExercisesName < ActiveRecord::Migration[6.0]
  def change
    add_index :exercises, [:name], unique: true
  end
end
