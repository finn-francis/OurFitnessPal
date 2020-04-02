# frozen_string_literal: true

Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :exercises, only: [:index]
    end
  end
  get '/*path' => 'homepage#index'
end
