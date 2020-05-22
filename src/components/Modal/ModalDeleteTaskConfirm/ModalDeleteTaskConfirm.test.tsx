import { render } from "@testing-library/react";
import React from 'react';
import { ModalDeleteTaskConfirm, ModalDeleteTaskConfirmProps } from './ModalDeleteTaskConfirm';

const mockedOnConfirm = jest.fn();
const mockedOnCancel = jest.fn();

let props: ModalDeleteTaskConfirmProps = {
    onCancel: mockedOnCancel,
    onConfirm: mockedOnConfirm,
};

describe('<ModalDeleteTaskConfirm />', () => {
    it('should render the ModalConfirmChoice', () => {
        const wrapper = render(<ModalDeleteTaskConfirm {...props} />);
        expect(wrapper).not.toBeNull();
    });
});
