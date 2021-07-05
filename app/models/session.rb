# frozen_string_literal: true

class Session < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :user_id, presence: true
end
