# frozen_string_literal: true

FactoryBot.define do
  factory :exercise do
    name { Faker::Name.name }
    description { Faker::Lorem.paragraph }
  end
end
