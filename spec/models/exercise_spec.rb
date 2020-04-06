# frozen_string_literal: true

require 'rails_helper'

describe Exercise, type: :model do
  it 'has a valid factory' do
    expect(build(:exercise)).to be_valid
  end

  describe 'attributes' do
    it { is_expected.to(have_attribute(:name)) }
    it { is_expected.to(have_attribute(:description)) }
  end

  describe 'required attributes' do
    it { should validate_presence_of(:name).with_message('can\'t be blank') }
    it { should validate_uniqueness_of(:name).with_message('has already been taken') }
  end
end
