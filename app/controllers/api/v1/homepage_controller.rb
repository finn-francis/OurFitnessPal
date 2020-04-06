# frozen_string_literal: true

module Api
  module V1
    class HomepageController < ApplicationController
      skip_before_action :authenticate_user!

      respond_to :json

      def index
        render(json: current_user)
      end
    end
  end
end
