# frozen_string_literal: true

class Api::V1::ExercisesController < ApplicationController
  def index
    render json: Exercise.all.order(:name)
  end
end
