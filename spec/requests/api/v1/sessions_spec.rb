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
end
