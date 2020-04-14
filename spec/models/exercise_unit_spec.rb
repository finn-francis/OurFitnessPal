# frozen_string_literal: true

require 'rails_helper'

describe ExerciseUnit, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:default_unit_of_measure) }
    it { is_expected.to validate_uniqueness_of(:name) }
  end

  describe 'methods' do
    let(:weight) { build(:exercise_unit, :weight) }
    let(:time) { build(:exercise_unit, :time) }
    let(:reps) { build(:exercise_unit, :reps) }
    let(:distance) { build(:exercise_unit, :distance) }
    let(:speed) { build(:exercise_unit, :speed) }

    describe '#default_unit' do
      it 'should return the name and key of the default unit of measure' do
        expect(weight.default_unit.to_h).to eq({ key: :kg, name: 'kilogram', storage_default: false })
        expect(time.default_unit.to_h).to eq({ key: :s, name: 'second', storage_default: false })
        expect(reps.default_unit.to_h).to eq({ key: :reps, name: 'rep', storage_default: true })
        expect(distance.default_unit.to_h).to eq({ key: :m, name: 'meter', storage_default: false })
        expect(speed.default_unit.to_h).to eq({ key: :kph, name: 'kilometers per hour', storage_default: false })
      end
    end

    describe '#stored_unit' do
      it 'should return the name and key of the stored unit of measure' do
        expect(weight.stored_unit.to_h).to eq({ key: :g, name: 'gram', storage_default: true })
        expect(time.stored_unit.to_h).to eq({ key: :ms, name: 'milisecond', storage_default: true })
        expect(reps.stored_unit.to_h).to eq({ key: :reps, name: 'rep', storage_default: true })
        expect(distance.stored_unit.to_h).to eq({ key: :mm, name: 'millimeter', storage_default: true })
        expect(speed.stored_unit.to_h).to eq({ key: :mh, name: 'meters per hour', storage_default: true })
      end
    end
  end
end
