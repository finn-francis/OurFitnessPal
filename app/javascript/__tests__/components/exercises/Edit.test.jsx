import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import Edit from '../../../components/admin/exercises/Edit';

describe('Edit', () => {

  describe("render", function() {
    let container
    let exerciseData

    beforeEach(() => {
      exerciseData = {id: 1, name: 'Squat', description: 'Go Low!'}
      container = shallow(<Edit match={{params: {id: exerciseData.id}}}/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows a form to edit an existing exercise", () => {
      expect(container.find('#exerciseName').length).toEqual(1);
      expect(container.find('#description').length).toEqual(1);
      expect(container.find('.custom-button').length).toEqual(1);
    })
  })

  describe('onChange', function() {
    let container
    let exerciseData

    beforeEach(() => {
      exerciseData = {id: 1, name: 'Squat', description: 'Go Low!'}
      container = shallow(<Edit match={{params: {id: exerciseData.id}}}/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("updates the state of the component when form elements are changed", () => {
      container.find('input').at(0).simulate('change', {
        target: { name: 'name', value: 'Bench Press' }
      });
      container.find('input').at(0).simulate('change', {
        target: { name: 'description', value: 'Press it good' }
      });
      expect(container.instance().state.name).toEqual('Bench Press');
      expect(container.instance().state.description).toEqual('Press it good');
    })
  })
});