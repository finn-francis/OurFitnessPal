# frozen_string_literal: true

FactoryBot.define do
  factory :exercise_unit do
    list = %w[weight time reps distance speed]
    unit_of_measure = list.sample

    name { unit_of_measure }
    default_unit_of_measure { list.index(unit_of_measure) }

    list.each_with_index do |unit, index|
      trait unit.to_sym do
        name { unit }
        default_unit_of_measure { index }
      end
    end
  end
end
