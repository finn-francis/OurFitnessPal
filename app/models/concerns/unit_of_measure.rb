# frozen_string_literal: true

module UnitOfMeasure
  ALL = {
    'weight' => [
      { key: :g, name: 'gram', storage_default: true },
      { key: :kg, name: 'kilogram', storage_default: false },
      { key: :lb, name: 'pound', storage_default: false },
      { key: :st, name: 'stone', storage_default: false }
    ],
    'time' => [
      { key: :ms, name: 'milisecond', storage_default: true },
      { key: :s, name: 'second', storage_default: false }
    ],
    'reps' => [
      { key: :reps, name: 'rep', storage_default: true }
    ],
    'distance' => [
      { key: :mm, name: 'millimeter', storage_default: true },
      { key: :cm, name: 'centimeter', storage_default: false },
      { key: :m, name: 'meter', storage_default: false },
      { key: :km, name: 'kilometer', storage_default: false },
      { key: :inch, name: 'inch', storage_default: false },
      { key: :foot, name: 'foot', storage_default: false },
      { key: :yd, name: 'yard', storage_default: false },
      { key: :mi, name: 'mile', storage_default: false }
    ],
    'speed' => [
      { key: :mh, name: 'meters per hour', storage_default: true },
      { key: :kph, name: 'kilometers per hour', storage_default: false },
      { key: :mph, name: 'miles per hour', storage_default: false }
    ]
  }.freeze

  class << self
    def stored_unit_for(exercise_unit_name)
      ALL[exercise_unit_name].find { |unit| unit[:storage_default] }
    end

    def convertable_to(exercise_unit_name)
      exercise_unit_name = exercise_unit_name.to_sym
      units_of_measure = ALL.select do |_exercise_unit, units|
        units.any? { |unit| unit[:key] == exercise_unit_name }
      end.values.first

      units_of_measure.map { |unit| { key: unit[:key], name: unit[:name] } }
    end
  end
end
