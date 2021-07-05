# frozen_string_literal: true

FactoryBot.define do
  factory :session do
    name { Faker::Lorem.word }
    notes { Faker::Lorem.sentence }
    user { User.first || create(:user) }
  end
end
