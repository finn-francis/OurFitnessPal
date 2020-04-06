# frozen_string_literal: true

require 'rails_helper'

describe 'get /api/v1/exercises', type: :request do
  include Warden::Test::Helpers

  before do
    Warden.test_mode!
    @user = User.create!(email: Faker::Internet.email, password: 'password', password_confirmation: 'password')
    login_as(@user, scope: 'user')
  end

  describe '#index' do
    let(:url) { '/api/v1/exercises' }

    context 'there are no exercises' do
      it 'responds with an empty array' do
        get url
        expect(response).to have_http_status('200')
        expect(response.body).to eq [].to_json
      end
    end

    context 'there are multiple exercises' do
      before do
        @exercises = create_list(:exercise, 3).sort_by(&:name).to_json
      end

      it 'responds with an all exercises ordered by name' do
        get url
        expect(response).to have_http_status('200')
        expect(response.body).to eq @exercises
      end
    end
  end

  describe '#show' do
    let(:url) { '/api/v1/exercises/' }

    context 'there is no exercise with the provided id' do
      it 'responds with a record not found error' do
        get "#{url}0"
        expect(response).to have_http_status('200')
        expect(response.body).to eq 'Record not found'
      end
    end

    context 'there is an exercise with the provided id' do
      before do
        @exercise = create(:exercise)
        @exercise_json = @exercise.to_json
      end

      it 'responds with an all exercises ordered by name' do
        get "#{url}#{@exercise.id}"
        expect(response).to have_http_status('200')
        expect(response.body).to eq @exercise_json
      end
    end
  end
end