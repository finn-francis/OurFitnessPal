# frozen_string_literal: true

class Exercise < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
end
