# frozen_string_literal: true

require 'rails_helper'

describe UnitOfMeasure do
  def map_to(units, key)
    units.map { |unit| unit[key] }
  end

  describe UnitOfMeasure::Unit do
    it 'should accept a hash of options and set them as attributes' do
      instance = described_class.new({ key: :g, name: 'gram', storage_default: true })
      expect(instance.key).to eq(:g)
      expect(instance.name).to eq('gram')
      expect(instance.storage_default).to eq(true)
    end
  end

  describe '#stored_unit_for' do
    it 'should return the default stored unit of measure for the provided exercise unit' do
      expect(described_class.stored_unit_for('weight').to_h).to eq({ key: :g, name: 'gram', storage_default: true })
      expect(described_class.stored_unit_for('time').to_h).to eq({ key: :ms, name: 'milisecond',
                                                                   storage_default: true })
      expect(described_class.stored_unit_for('reps').to_h).to eq({ key: :reps, name: 'rep', storage_default: true })
      expect(described_class.stored_unit_for('distance').to_h).to eq({ key: :mm, name: 'millimeter',
                                                                       storage_default: true })
      expect(described_class.stored_unit_for('speed').to_h).to eq({ key: :mh, name: 'meters per hour',
                                                                    storage_default: true })
    end
  end

  describe '#unit_for' do
    it 'should return the Unit struct for the given unit' do
      expect(described_class.unit_for('g').to_h).to eq({ key: :g, name: 'gram', storage_default: true })
      expect(described_class.unit_for('ms').to_h).to eq({ key: :ms, name: 'milisecond', storage_default: true })
      expect(described_class.unit_for('reps').to_h).to eq({ key: :reps, name: 'rep', storage_default: true })
      expect(described_class.unit_for('mm').to_h).to eq({ key: :mm, name: 'millimeter', storage_default: true })
      expect(described_class.unit_for('mh').to_h).to eq({ key: :mh, name: 'meters per hour', storage_default: true })
    end
  end

  describe '#convertable_to' do
    it 'should return valid units of measurement that the given unit of measurement can be converted to' do
      expect(map_to(described_class.convertable_to(:g), :key)).to eq(%i[g kg lb st])
      expect(map_to(described_class.convertable_to(:g), :name)).to eq(%w[gram kilogram pound stone])
      expect(map_to(described_class.convertable_to(:s), :key)).to eq(%i[ms s])
      expect(map_to(described_class.convertable_to(:s), :name)).to eq(%w[milisecond second])
      expect(map_to(described_class.convertable_to(:reps), :key)).to eq(%i[reps])
      expect(map_to(described_class.convertable_to(:reps), :name)).to eq(%w[rep])
      expect(map_to(described_class.convertable_to(:inch), :key)).to eq(%i[mm cm m km inch foot yd mi])
      expect(map_to(described_class.convertable_to(:inch), :name)).to eq(%w[millimeter centimeter meter kilometer inch
                                                                            foot yard mile])
      expect(map_to(described_class.convertable_to(:kph), :key)).to eq(%i[mh kph mph])
      expect(map_to(described_class.convertable_to(:kph), :name)).to eq(['meters per hour', 'kilometers per hour',
                                                                         'miles per hour'])
    end
  end
end
