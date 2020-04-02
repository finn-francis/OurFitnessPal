# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ExercisesController do
  describe '#index' do
    let(:do_request) { get :index }

    context 'there are no exercises' do
      it 'responds with an empty array' do
        do_request
        expect(response).to have_http_status('200')
        expect(response.body).to eq [].to_json
      end
    end

    context 'there are multiple exercises' do
      before do
        @exercises = create_list(:exercise, 3).sort_by(&:name).to_json
      end

      it 'responds with an all exercises ordered by name' do
        do_request
        expect(response).to have_http_status('200')
        expect(response.body).to eq @exercises
      end
    end
  end
end
