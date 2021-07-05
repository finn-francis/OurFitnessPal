# frozen_string_literal: true

module Api
  module V1
    class SessionsController < ApplicationController
      def index
        render json: current_user.sessions.order(:name)
      end

      def show
        render json: find_session
      end

      private

      def find_session
        current_user.sessions.find_by(id: params[:id]) || 'Record not found'
      end
    end
  end
end
