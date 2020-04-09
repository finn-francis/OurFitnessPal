# frozen_string_literal: true

require 'rails_helper'
require_relative '../../lib/unit_converter'

describe UnitConverter do
  context 'converting to' do
    shared_examples 'converting to a unit' do
      it 'should convert to the given unit' do
        amounts.each do |expectation|
          expect(described_class.convert(expectation[:amount], to: unit)).to eq(expectation[:expected])
        end
      end
    end

    context 'weight' do
      describe 'grams' do
        let(:unit) { :g }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'kilograms' do
        let(:unit) { :kg }
        let(:amounts) do
          [{ amount: 1000, expected: 1 },
           { amount: 10_550, expected: 10.55 },
           { amount: 12_345, expected: 12.345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'pounds' do
        let(:unit) { :lb }
        let(:amounts) do
          [{ amount: 1000, expected: 2.2046226218487757 },
           { amount: 10_550, expected: 23.258768660504582 },
           { amount: 12_345, expected: 27.216066266723136 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'stones' do
        let(:unit) { :st }
        let(:amounts) do
          [{ amount: 10_000, expected: 1.574730444177697 },
           { amount: 100_550, expected: 15.833914616206744 },
           { amount: 120_345, expected: 18.951093530456497 }]
        end
        it_behaves_like 'converting to a unit'
      end
    end

    context 'time' do
      describe 'miliseconds' do
        let(:unit) { :ms }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'seconds' do
        let(:unit) { :s }
        let(:amounts) do
          [{ amount: 1000, expected: 1 },
           { amount: 10_550, expected: 10.55 },
           { amount: 12_345, expected: 12.345 }]
        end
        it_behaves_like 'converting to a unit'
      end
    end

    describe 'reps' do
      let(:unit) { :reps }
      let(:amounts) { [{ amount: 1, expected: 1 }, { amount: 15, expected: 15 }] }
      it_behaves_like 'converting to a unit'
    end

    context 'distance' do
      describe 'milimeters' do
        let(:unit) { :mm }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'centimeters' do
        let(:unit) { :cm }
        let(:amounts) do
          [{ amount: 10, expected: 1 },
           { amount: 15, expected: 1.5 },
           { amount: 123, expected: 12.3 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'meters' do
        let(:unit) { :m }
        let(:amounts) do
          [{ amount: 1000, expected: 1 },
           { amount: 10_550, expected: 10.55 },
           { amount: 12_345, expected: 12.345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'kilometers' do
        let(:unit) { :km }
        let(:amounts) do
          [{ amount: 100_000, expected: 0.1 },
           { amount: 1_550_000, expected: 1.55 },
           { amount: 12_345_678, expected: 12.345678 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'inches' do
        let(:unit) { :inch }
        let(:amounts) do
          [{ amount: 1000, expected: 39.37007874015748 },
           { amount: 10_550, expected: 415.35433070866145 },
           { amount: 12_345, expected: 486.02362204724415 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'feet' do
        let(:unit) { :foot }
        let(:amounts) do
          [{ amount: 1000, expected: 3.2808398950131 },
           { amount: 10_550, expected: 34.612860892388206 },
           { amount: 12_345, expected: 40.501968503936716 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'yards' do
        let(:unit) { :yd }
        let(:amounts) do
          [{ amount: 1000, expected: 1.0936132983377078 },
           { amount: 10_550, expected: 11.537620297462817 },
           { amount: 12_345, expected: 13.500656167979002 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'miles' do
        let(:unit) { :mi }
        let(:amounts) do
          [{ amount: 1_000_000, expected: 0.621371192237334 },
           { amount: 9_999_999, expected: 6.213711301002148 },
           { amount: 12_000_000, expected: 7.456454306848007 }]
        end
        it_behaves_like 'converting to a unit'
      end
    end

    context 'speed' do
      describe 'meters per hour' do
        let(:unit) { :mh }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'kilometers per hour' do
        let(:unit) { :kph }
        let(:amounts) do
          [{ amount: 10, expected: 0.01 },
           { amount: 10_000, expected: 10 },
           { amount: 12_500, expected: 12.5 }]
        end
        it_behaves_like 'converting to a unit'
      end

      describe 'miles per hour' do
        let(:unit) { :mph }
        let(:amounts) do
          [{ amount: 1000, expected: 0.6213920424535043 },
           { amount: 10_000, expected: 6.2139204245350435 },
           { amount: 12_500, expected: 7.767400530668804 }]
        end
        it_behaves_like 'converting to a unit'
      end
    end
  end

  context 'converting from' do
    shared_examples 'converting from a unit' do
      it 'should convert from the given unit' do
        amounts.each do |expectation|
          expect(described_class.convert(expectation[:amount], from: unit)).to eq(expectation[:expected])
        end
      end
    end

    context 'weight' do
      describe 'grams' do
        let(:unit) { :g }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'kilograms' do
        let(:unit) { :kg }
        let(:amounts) do
          [{ amount: 1, expected: 1000 },
           { amount: 10.5, expected: 10_500 },
           { amount: 12, expected: 12_000 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'pounds' do
        let(:unit) { :lb }
        let(:amounts) do
          [{ amount: 2, expected: 907.18474 },
           { amount: 23, expected: 10_432.62451 },
           { amount: 27.5, expected: 12_473.790175 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'stones' do
        let(:unit) { :st }
        let(:amounts) do
          [{ amount: 1.5, expected: 9525.439769999999 },
           { amount: 15, expected: 95_254.3977 },
           { amount: 19, expected: 120_655.57041999999 }]
        end
        it_behaves_like 'converting from a unit'
      end
    end

    context 'time' do
      describe 'miliseconds' do
        let(:unit) { :ms }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'seconds' do
        let(:unit) { :s }
        let(:amounts) do
          [{ amount: 1, expected: 1000 },
           { amount: 10, expected: 10_000 },
           { amount: 12, expected: 12_000 }]
        end
        it_behaves_like 'converting from a unit'
      end
    end

    describe 'reps' do
      let(:unit) { :reps }
      let(:amounts) { [{ amount: 1, expected: 1 }, { amount: 15, expected: 15 }] }
      it_behaves_like 'converting from a unit'
    end

    context 'distance' do
      describe 'milimeters' do
        let(:unit) { :mm }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'centimeters' do
        let(:unit) { :cm }
        let(:amounts) do
          [{ amount: 10, expected: 100 },
           { amount: 15, expected: 150 },
           { amount: 123, expected: 1230 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'meters' do
        let(:unit) { :m }
        let(:amounts) do
          [{ amount: 1, expected: 1000 },
           { amount: 10, expected: 10_000 },
           { amount: 12.3, expected: 12_300 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'kilometers' do
        let(:unit) { :km }
        let(:amounts) do
          [{ amount: 0.1, expected: 100_000 },
           { amount: 1.55, expected: 1_550_000 },
           { amount: 12.3, expected: 12_300_000 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'inches' do
        let(:unit) { :inch }
        let(:amounts) do
          [{ amount: 39, expected: 990.5999999999999 },
           { amount: 415, expected: 10_541 },
           { amount: 486, expected: 12_344.4 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'feet' do
        let(:unit) { :foot }
        let(:amounts) do
          [{ amount: 3, expected: 914.4000000000066 },
           { amount: 34, expected: 10_363.200000000073 },
           { amount: 40, expected: 12_192.000000000087 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'yards' do
        let(:unit) { :yd }
        let(:amounts) do
          [{ amount: 1, expected: 914.4 },
           { amount: 11, expected: 10_058.4 },
           { amount: 13.5, expected: 12_344.4 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'miles' do
        let(:unit) { :mi }
        let(:amounts) do
          [{ amount: 0.6, expected: 965_606.3999999999 },
           { amount: 6.2, expected: 9_977_932.8 },
           { amount: 7, expected: 11_265_408 }]
        end
        it_behaves_like 'converting from a unit'
      end
    end

    context 'speed' do
      describe 'meters per hour' do
        let(:unit) { :mh }
        let(:amounts) do
          [{ amount: 1000, expected: 1000 },
           { amount: 10_550, expected: 10_550 },
           { amount: 12_345, expected: 12_345 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'kilometers per hour' do
        let(:unit) { :kph }
        let(:amounts) do
          [{ amount: 10, expected: 10_000 },
           { amount: 12.5, expected: 12_500 },
           { amount: 14.4, expected: 14_400 }]
        end
        it_behaves_like 'converting from a unit'
      end

      describe 'miles per hour' do
        let(:unit) { :mph }
        let(:amounts) do
          [{ amount: 1, expected: 1609.29 },
           { amount: 6, expected: 9_655.74 },
           { amount: 12.5, expected: 20_116.125 }]
        end
        it_behaves_like 'converting from a unit'
      end
    end
  end

  # This probably isn't something that will be used often (if ever)
  # However it is a very good way to test if we lose any data when converting to and from different units
  context 'converting to and from' do
    it 'should convert between stone and kg' do
      stones = 13.5
      kilograms = 85.7
      expect(described_class.convert(stones, from: :st, to: :kg).round(1)).to eq(kilograms)
      expect(described_class.convert(kilograms, from: :kg, to: :st).round(1)).to eq(stones)
    end

    it 'should convert centimeters to yards' do
      centimeters = 65
      yards = 0.7
      expect(described_class.convert(centimeters, from: :cm, to: :yd).round(1)).to eq(yards)
      # There is a discrepency of 1 when converting from yd to cm
      # Below shows that the round trip to yd and back works without any data changing
      expect(described_class.convert(yards, from: :yd, to: :cm).round(1)).to eq(centimeters - 1)

      yards = described_class.convert(centimeters, from: :cm, to: :yd)
      expect(described_class.convert(yards, from: :yd, to: :cm).round(1)).to eq(centimeters)
    end

    it 'should convert k/ph to m/ph' do
      kph = 12.5
      mph = 7.8
      expect(described_class.convert(kph, from: :kph, to: :mph).round(1)).to eq(mph)
      # There is a small discrepency of 0.1 when converting from mph to kph
      # Below shows that the round trip to mph and back works without any data changing
      expect(described_class.convert(mph, from: :mph, to: :kph).round(1)).to eq(kph + 0.1)

      mph = described_class.convert(kph, from: :kph, to: :mph)
      expect(described_class.convert(mph, from: :mph, to: :kph).round(1)).to eq(kph)
    end
  end
end
