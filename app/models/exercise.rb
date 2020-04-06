# frozen_string_literal: true

class Exercise < ApplicationRecord
  validates :name, presence: true
end
