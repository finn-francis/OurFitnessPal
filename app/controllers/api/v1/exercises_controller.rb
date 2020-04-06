# frozen_string_literal: true

module Api
  module V1
    class ExercisesController < ApplicationController
      def index
        render json: Exercise.all.order(:name)
      end
    end
  end
end
