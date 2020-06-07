import { render } from "@testing-library/react";
import React from 'react';
import { ModalTaskExists, ModalTaskExistsProps } from './ModalTaskExists';

const mockedOnConfirm = jest.fn();

const props: ModalTaskExistsProps = {
    onConfirm: mockedOnConfirm,
};

describe('<ModalTaskExists />', () => {
    it('should render the ModalTaskExists', () => {
        const wrapper = render(<ModalTaskExists {...props} />);
        expect(wrapper).not.toBeNull();
    });
});
