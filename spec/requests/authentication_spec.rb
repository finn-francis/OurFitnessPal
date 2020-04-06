# frozen_string_literal: true

require 'rails_helper'

describe 'POST /api/v1/login', type: :request do
  before do
    @user = User.create!(email: Faker::Internet.email, password: 'password', password_confirmation: 'password')
    @params = { user: { email: @user.email, password: @user.password } }
  end
  let(:url) { '/api/v1/login' }

  context 'when params are correct' do
    before { post url, params: @params }

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns JTW token in authorization header' do
      expect(response.headers['Authorization']).to be_present
    end

    it 'returns valid JWT token' do
      token_from_request = response.headers['Authorization'].split(' ').last
      decoded_token = JWT.decode(token_from_request, ENV['DEVISE_JWT_SECRET_KEY'], true)
      expect(decoded_token.first['sub']).to be_present
    end
  end

  context 'when login params are incorrect' do
    before { post url }

    it 'returns unathorized status' do
      expect(response.status).to eq 401
    end
  end
end

describe 'DELETE /api/v1/logout', type: :request do
  let(:url) { '/api/v1/logout' }

  it 'returns 204, no content' do
    delete url
    expect(response).to have_http_status(204)
  end
end
