import { render } from "@testing-library/react";
import React from 'react';
import { ModalConfirmChoice, ModalConfirmChoiceProps } from './ModalConfirmChoice';

const mockedOnConfirm = jest.fn();
const mockedOnCancel = jest.fn();

let props: ModalConfirmChoiceProps = {
    onCancel: mockedOnCancel,
    onConfirm: mockedOnConfirm,
};

describe('<ModalConfirmChoice />', () => {
    it('should render the ModalConfirmChoice', () => {
        const wrapper = render(<ModalConfirmChoice {...props} />);
        expect(wrapper).not.toBeNull();
    });
});
