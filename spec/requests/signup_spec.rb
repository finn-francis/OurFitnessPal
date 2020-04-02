# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'POST /signup', type: :request do
  let(:url) { '/signup' }
  let(:params) { { user: { email: Faker::Internet.email, password: 'password' } } }

  context 'when user is unauthenticated' do
    before { post url, params: params }

    it 'returns 200' do
      expect(response.status).to eq 200
    end

    it 'returns a new user' do
      expect(User.find(JSON.parse(response.body)['id'])).to be_truthy
    end
  end

  context 'when user already exists' do
    before do
      User.create!(email: params[:user][:email], password: 'password', password_confirmation: 'password')
      post url, params: params
    end

    it 'returns bad request status' do
      expect(response.status).to eq 400
    end

    it 'returns validation errors' do
      expect(JSON.parse(response.body)['errors'].first['title']).to eq('Bad Request')
    end
  end
end
