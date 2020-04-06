import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import Show from '../../../components/admin/exercises/Show';

describe('Show', () => {

  describe("render", function() {
    let container
    let exerciseData

    beforeEach(() => {
      exerciseData = {id: 1, name: 'Squat', description: 'Go Low!'}
      container = shallow(<Show match={{params: {id: exerciseData.id}}}/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows an exercise with it's description", () => {
      container.setState({exercise: exerciseData})
      expect(container.find('.exercise-name').text()).toEqual(exerciseData.name);
      expect(container.find('.exercise-description').text()).toEqual(exerciseData.description);
    })
  })
});