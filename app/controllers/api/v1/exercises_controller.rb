# frozen_string_literal: true

module Api
  module V1
    class ExercisesController < ApplicationController
      def index
        render json: Exercise.all.order(:name)
      end

      def show
        render json: exercise
      end

      private

      def exercise
        @exercise ||= Exercise.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        'Record not found'
      end
    end
  end
end
