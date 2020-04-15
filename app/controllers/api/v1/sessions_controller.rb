# frozen_string_literal: true

module Api
  module V1
    class SessionsController < ApplicationController
      def index
        render json: current_user.sessions.order(:name)
      end
    end
  end
end
