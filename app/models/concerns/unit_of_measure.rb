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

  Unit = Struct.new(:key, :name, :storage_default) do
    def initialize(options)
      options.each { |k, v| send("#{k}=", v) }
    end
  end

  class << self
    def stored_unit_for(exercise_unit_name)
      generate_unit(ALL[exercise_unit_name].find { |unit| unit[:storage_default] })
    end

    def unit_for(unit_of_measure)
      unit_of_measure = unit_of_measure.to_sym

      result = nil
      ALL.each do |_exercise_unit, units|
        break if (result = units.find { |unit| unit[:key] == unit_of_measure })
      end
      generate_unit(result)
    end

    def convertable_to(unit_of_measure)
      unit_of_measure = unit_of_measure.to_sym
      units_of_measure = ALL.select do |_exercise_unit, units|
        units.any? { |unit| unit[:key] == unit_of_measure }
      end.values.first

      # units_of_measure.map { |unit| { key: unit[:key], name: unit[:name] } }
      generate_unit(units_of_measure)
    end

    private

    def generate_unit(unit)
      unit.is_a?(Array) ? unit.map { |u| Unit.new(u) } : Unit.new(unit)
    end
  end
end
