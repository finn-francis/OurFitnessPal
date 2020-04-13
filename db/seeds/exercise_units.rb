# frozen_string_literal: true

EXERCISE_UNITS = [
  { name: 'weight', default_unit_of_measure: 0 },
  { name: 'time', default_unit_of_measure: 1 },
  { name: 'reps', default_unit_of_measure: 2 },
  { name: 'distance', default_unit_of_measure: 3 },
  { name: 'speed', default_unit_of_measure: 4 }
].freeze

EXERCISE_UNITS.each do |unit|
  ExerciseUnit.find_or_create_by!(unit)
end
