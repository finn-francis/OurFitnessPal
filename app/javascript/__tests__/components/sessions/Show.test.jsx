import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import Show from '../../../components/main/sessions/Show';

describe('Show', () => {

  describe("render", function() {
    let container
    let sessionData

    beforeEach(() => {
      sessionData = {id: 1, name: '5x5 Leg Day', notes: '5 sets of 5 reps'}
      container = shallow(<Show match={{params: {id: sessionData.id}}} setAreaTitle={() => {}} setArea={() => {}}/>);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows an session with it's notes", () => {
      container.setState({session: sessionData})
      expect(container.find('.session-name').text()).toEqual(sessionData.name);
      expect(container.find('.session-notes').text()).toEqual(sessionData.notes);
    })
  })
});