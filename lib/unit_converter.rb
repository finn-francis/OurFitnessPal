# frozen_string_literal: true

module UnitConverter
  UNITS = {
    g: Hash.new(->(amount) { amount }),
    kg: { to: ->(amount) { amount / 1000.0 }, from: ->(amount) { amount * 1000 } },
    lb: { to: ->(amount) { amount / 453.59237 }, from: ->(amount) { amount * 453.59237 } },
    st: { to: ->(amount) { amount / 6350.29318 }, from: ->(amount) { amount * 6350.29318 } },
    ms: Hash.new(->(amount) { amount }),
    s: { to: ->(amount) { amount / 1000.0 }, from: ->(amount) { amount * 1000 } },
    reps: Hash.new(->(amount) { amount }),
    mm: Hash.new(->(amount) { amount }),
    cm: { to: ->(amount) { amount / 10.0 }, from: ->(amount) { amount * 10 } },
    m: { to: ->(amount) { amount / 1000.0 }, from: ->(amount) { amount * 1000 } },
    km: { to: ->(amount) { amount / 1_000_000.0 }, from: ->(amount) { amount * 1_000_000 } },
    inch: { to: ->(amount) { amount / 25.4 }, from: ->(amount) { amount * 25.4 } },
    foot: { to: ->(amount) { amount * 0.0032808398950131 }, from: ->(amount) { amount / 0.0032808398950131 } },
    yd: { to: ->(amount) { amount / 914.4 }, from: ->(amount) { amount * 914.4 } },
    mi: { to: ->(amount) { amount / 1_609_344.0 }, from: ->(amount) { amount * 1_609_344.0 } },
    mh: Hash.new(->(amount) { amount }),
    kph: { to: ->(amount) { amount / 1000.0 }, from: ->(amount) { amount * 1000.0 } },
    mph: { to: ->(amount) { amount / 1609.29 }, from: ->(amount) { amount * 1609.29 } }
  }.freeze

  class << self
    # :to and :from both defalt to :g because :g (along with :ms, :reps, :mm, :mh etc) is the default storage unit
    # if either :to or :from are missing we know that we will be converting to or from the default unit
    def convert(amount, to: :g, from: :g)
      UNITS.dig(to, :to).call(UNITS.dig(from, :from).call(amount))
    end
  end
end
