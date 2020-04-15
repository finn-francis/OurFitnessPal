import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { mount } from 'enzyme';
import ConfirmationModal from '../../../components/modals/ConfirmationModal';

describe('ConfirmationModal', () => {

  describe("render", function() {
    let container
    let buttonText = 'button text'
    let variant = 'danger'
    let modalHeader = 'header text'
    let modalBody = 'body text'
    let cancelText = 'cancel'
    let confirmText = 'confirm'
    let handleConfirm = jest.fn();

    beforeEach(() => {
      container = mount(<ConfirmationModal
        buttonText={buttonText}
        variant={variant}
        modalHeader={modalHeader}
        modalBody={modalBody}
        cancelText={cancelText}
        confirmText={confirmText}
        handleConfirm={handleConfirm}
      />);
    });

    afterEach(() => {
      container.unmount();
    })

    it("shows a modal with text that is set via the props", () => {
      expect(container.find(`.btn-${variant}`).length).toEqual(1);
      expect(container.find('.btn').text()).toEqual(buttonText);
      container.find('.btn').simulate('click');
      expect(container.find('.modal-title .h4').text()).toEqual(modalHeader);
      expect(container.find('div .modal-body').text()).toEqual(modalBody);
      expect(container.find('.btn-secondary').text()).toEqual(cancelText);
      expect(container.find('.btn-primary').text()).toEqual(confirmText);
    })

    it("calls the confirm function when clicking the confirm button", () => {
      container.find('.btn').simulate('click');
      container.find('.btn-primary').simulate('click');
      expect(handleConfirm).toBeCalled();
    })
  })
});