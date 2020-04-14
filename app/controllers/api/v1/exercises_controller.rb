# frozen_string_literal: true

module Api
  module V1
    class ExercisesController < ApplicationController
      def index
        render json: Exercise.all.order(:name)
      end

      def show
        render json: find_exercise
      end

      def create
        exercise = Exercise.new(exercise_params)
        if exercise.valid?
          exercise.save
          render json: { data: exercise, error: false }
        else
          render json: { data: exercise.errors, error: true }
        end
      end

      def edit
        render json: find_exercise
      end

      def update
        find_exercise
        if @exercise.update(exercise_params)
          render json: { data: @exercise, error: false }
        else
          render json: { data: @exercise.errors, error: true }
        end
      end

      private

      def find_exercise
        @exercise ||= Exercise.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        'Record not found'
      end

      def exercise_params
        params.require(:exercise).permit(:name, :description)
      end
    end
  end
end
