# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'api/v1/login',
               sign_out: 'api/v1/logout',
               registration: 'api/v1/signup'
             },
             controllers: {
               sessions: 'api/v1/devise/sessions',
               registrations: 'api/v1/devise/registrations'
             }
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :exercises, except: :new
      resources :homepage, only: :index
    end
  end
  get '/*path' => 'homepage#index'
end
