# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout'
             },
             controllers: {
               sessions: 'api/v1/sessions'
             }
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
