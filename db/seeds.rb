# frozen_string_literal: true

User.find_or_create_by!(admin: true)
User.find_or_create_by!(admin: false)
