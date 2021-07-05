import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../../../components/main/sessions/Index';

describe('Index', () => {
  describe("render", function() {
    let container

    beforeEach(() => {
      container = shallow(<Index setAreaTitle={() => {}} setArea={() => {}}/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows there are no sessions if there is no data", () => {
      expect(container.find('.card-body').length).toEqual(0)
      expect(container.find('.no-sessions').length).toEqual(1)
      expect(container.find('.add-session').length).toEqual(1)
    })

    it("shows a list of sessions when given a list of exercise JSON", () => {
      let sessionData = [{id: 1, name: '5x5 Leg Day'}, {id: 2, name: '5K Run'}, {id: 3, name: 'HIIT'}]
      container.setState({sessions: sessionData})
      expect(container.find('.card-body').length).toEqual(sessionData.length)
      expect(container.find('.view-session').length).toEqual(sessionData.length)
      expect(container.find('.add-session').length).toEqual(1)
      expect(container.find('.no-sessions').length).toEqual(0)
    })
  })
});