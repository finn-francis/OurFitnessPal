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

      it 'responds with the exercise data' do
        get "#{url}#{@exercise.id}"
        expect(response).to have_http_status('200')
        expect(response.body).to eq @exercise_json
      end
    end
  end

  describe '#create' do
    let(:url) { '/api/v1/exercises' }

    context 'with valid params' do
      before do
        @initial_exercise_count = Exercise.count
        params = { exercise: { name: Faker::Name.name, description: Faker::Lorem.paragraph } }
        post url, params: params
      end

      it 'creates the record' do
        expect(response).to have_http_status('200')
        expect(Exercise.count).to eq(@initial_exercise_count + 1)
      end

      it 'responds with the new record as JSON' do
        exercise = Exercise.last
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['data']['id']).to eq exercise.id
        expect(parsed_response['data']['name']).to eq exercise.name
        expect(parsed_response['data']['description']).to eq exercise.description
      end
    end

    context 'with invalid params(name blank)' do
      before do
        @initial_exercise_count = Exercise.count
        params = { exercise: { description: Faker::Lorem.paragraph } }
        post url, params: params
      end

      it 'does not create a record' do
        expect(response).to have_http_status('200')
        expect(Exercise.count).to eq(@initial_exercise_count)
      end

      it 'returns an error message' do
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['data']['name']).to eq ['can\'t be blank']
      end
    end

    describe '#edit' do
      let(:url) { '/api/v1/exercises/:id/edit' }

      context 'there is no exercise with the provided id' do
        it 'responds with a record not found error' do
          get url.gsub(':id', '0')
          expect(response).to have_http_status('200')
          expect(response.body).to eq 'Record not found'
        end
      end

      context 'there is an exercise with the provided id' do
        before do
          @exercise = create(:exercise)
          @exercise_json = @exercise.to_json
        end

        it 'responds with the exercise data' do
          get url.gsub(':id', @exercise.id.to_s)
          expect(response).to have_http_status('200')
          expect(response.body).to eq @exercise_json
        end
      end
    end

    describe '#update' do
      let(:url) { '/api/v1/exercises/' }

      context 'with valid params' do
        before do
          @exercise = create(:exercise)
          @initial_exercise_count = Exercise.count
          params = { exercise: { name: Faker::Name.name, description: Faker::Lorem.paragraph } }
          put "#{url}#{@exercise.id}", params: params
        end

        it 'updates the record' do
          expect(response).to have_http_status('200')
          expect(Exercise.count).to eq(@initial_exercise_count)
        end

        it 'responds with the updated record as JSON' do
          @exercise.reload
          parsed_response = JSON.parse(response.body)
          expect(parsed_response['data']['id']).to eq @exercise.id
          expect(parsed_response['data']['name']).to eq @exercise.name
          expect(parsed_response['data']['description']).to eq @exercise.description
        end
      end
    end
  end
end
