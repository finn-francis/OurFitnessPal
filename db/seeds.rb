# frozen_string_literal: true

User.find_by(email: 'admin@gmail.com') ||
  User.create!(email: 'admin@gmail.com', password: 'password', password_confirmation: 'password', admin: true)
User.find_by(email: 'user@gmail.com') ||
  User.create(email: 'user@gmail.com', password: 'password', password_confirmation: 'password', admin: false)
