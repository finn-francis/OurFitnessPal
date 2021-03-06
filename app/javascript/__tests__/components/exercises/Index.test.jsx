import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../../../components/admin/exercises/Index';

describe('Index', () => {

  describe("render", function() {
    let container

    beforeEach(() => {
      container = shallow(<Index/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows there are no exercises if there is no data", () => {
      expect(container.find('.card-body').length).toEqual(0);
      expect(container.find('.no-exercises').length).toEqual(1);
      expect(container.find('.add-exercise').length).toEqual(1);
    })

    it("shows a list of exercises when given a list of exercise JSON", () => {
      let exerciseData = [{id: 1, name: 'Squat'}, {id: 2, name: 'Bench Press'}, {id: 3, name: 'Dead Lift'}]
      container.setState({exercises: exerciseData})
      expect(container.find('.card-body').length).toEqual(exerciseData.length);
      expect(container.find('.view-exercise').length).toEqual(exerciseData.length);
      expect(container.find('.edit-exercise').length).toEqual(exerciseData.length);
      expect(container.find('.delete-exercise').length).toEqual(exerciseData.length);
      expect(container.find('.add-exercise').length).toEqual(1);
      expect(container.find('.no-exercises').length).toEqual(0);
    })
  })
});