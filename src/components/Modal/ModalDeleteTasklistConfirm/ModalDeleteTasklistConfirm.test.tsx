import { render } from "@testing-library/react";
import React from 'react';
import { ModalDeleteTasklistConfirm, ModalDeleteTasklistConfirmProps } from './ModalDeleteTasklistConfirm';

const mockedOnConfirm = jest.fn();
const mockedOnCancel = jest.fn();

const props: ModalDeleteTasklistConfirmProps = {
    onCancel: mockedOnCancel,
    onConfirm: mockedOnConfirm,
};

describe('<ModalDeleteTasklistConfirm />', () => {
    it('should render the ModalDeleteTasklistConfirm', () => {
        const wrapper = render(<ModalDeleteTasklistConfirm {...props} />);
        expect(wrapper).not.toBeNull();
    });
});
