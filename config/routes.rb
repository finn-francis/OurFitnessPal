# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
