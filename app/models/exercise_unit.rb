# frozen_string_literal: true

class ExerciseUnit < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :default_unit_of_measure, presence: true

  enum default_unit_of_measure: { kg: 0, s: 1, reps: 2, m: 3, kph: 4 }

  def default_unit
    UnitOfMeasure.unit_for(self.default_unit_of_measure)
  end

  def stored_unit
    UnitOfMeasure.stored_unit_for(self.name)
  end
end
