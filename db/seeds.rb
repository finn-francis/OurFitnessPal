# frozen_string_literal: true

User.find_by(email: 'finnfrancis123@gmail.com') ||
  User.create!(email: 'finnfrancis123@gmail.com', password: 'password', password_confirmation: 'password', admin: true)
User.find_by(email: 'benhornsby898@hotmail.co.uk') ||
  User.create!(email: 'benhornsby898@hotmail.co.uk', password: 'password', password_confirmation: 'password',
               admin: true)

require_relative './seeds/exercise_units'
