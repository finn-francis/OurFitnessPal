# frozen_string_literal: true

require 'rails_helper'

describe User, type: :model do
  describe 'attributes' do
    it { is_expected.to(have_attribute(:admin)) }
  end
end
