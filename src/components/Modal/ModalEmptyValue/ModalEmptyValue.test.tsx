import { render } from "@testing-library/react";
import React from 'react';
import { ModalEmptyValue, ModalEmptyValueProps } from './ModalEmptyValue';

const mockedOnConfirm = jest.fn();

let props: ModalEmptyValueProps = {
    onConfirm: mockedOnConfirm,
};

describe('<ModalEmptyValue />', () => {
    it('should render the ModalEmptyValue', () => {
        const wrapper = render(<ModalEmptyValue {...props} />);
        expect(wrapper).not.toBeNull();
    });
});
