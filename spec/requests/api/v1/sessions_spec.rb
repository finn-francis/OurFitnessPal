# frozen_string_literal: true

require 'rails_helper'

describe 'get /api/v1/sessions', type: :request do
  include Warden::Test::Helpers

  before do
    Warden.test_mode!
    @user = create(:user)
    login_as(@user, scope: 'user')
  end

  describe '#index' do
    let(:url) { '/api/v1/sessions' }

    context 'there are no sessions' do
      it 'responds with an empty array' do
        get url
        expect(response).to have_http_status('200')
        expect(response.body).to eq [].to_json
      end
    end

    context 'there are multiple sessions' do
      before do
        @sessions = create_list(:session, 3).sort_by(&:name).to_json
      end

      it 'responds with an all sessions ordered by name' do
        get url
        expect(response).to have_http_status('200')
        expect(response.body).to eq @sessions
      end
    end
  end

  describe '#show' do
    let(:url) { '/api/v1/sessions/' }

    context 'there is no session with the provided id' do
      it 'responds with a record not found error' do
        get api_v1_session_path(0)
        expect(response).to have_http_status('200')
        expect(response.body).to eq 'Record not found'
      end
    end

    context 'there is an session with the provided id' do
      before do
        @session = create(:session)
        @session_json = @session.to_json
      end

      it 'responds with the session data' do
        get api_v1_session_path(@session)
        expect(response).to have_http_status('200')
        expect(response.body).to eq @session_json
      end
    end
  end
end
