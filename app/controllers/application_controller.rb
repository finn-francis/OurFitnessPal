# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  protected

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      render json: {
        errors: [
          {
            status: '400',
            title: 'Bad Request',
            detail: resource.errors,
            code: '100'
          }
        ]
      }, status: :bad_request
    end
  end
end
