import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import New from '../../../components/admin/exercises/New';

describe('New', () => {

  describe("render", function() {
    let container

    beforeEach(() => {
      container = shallow(<New/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows a form to create a new exercise", () => {
      expect(container.find('#exerciseName').length).toEqual(1);
      expect(container.find('#description').length).toEqual(1);
      expect(container.find('.custom-button').length).toEqual(1);
    })
  })

  describe('onChange', function() {
    let container

    beforeEach(() => {
      container = shallow(<New/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("updates the state of the component when form elements are changed", () => {
      container.find('input').at(0).simulate('change', {
        target: { name: 'name', value: 'Squat' }
      });
      expect(container.instance().state.name).toEqual('Squat');
    })
  })
});