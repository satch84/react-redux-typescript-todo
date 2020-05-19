import { render } from "@testing-library/react";
import React from "react";
import { MODAL__EMPTY_VALUE, MODAL__TASK_EXISTS } from '../../const/modals';
import { Modal, ModalProps } from "./Modal";

let props: ModalProps = {
    content: 'content',
    hasTitle: false,
    isOpened: true,
    type: MODAL__EMPTY_VALUE,
};

describe('<Modal />', () => {
    test('should render the Modal component', () => {
        const wrapper = render(<Modal {...props} />);
        expect(wrapper).toBeDefined();
    });

    test('should render the Modal with a warning title, a subtitle and an action button', () => {
        props = {
            ...props,
            action: true,
            buttonText: 'click here!',
            hasTitle: true,
            subtitle: 'modal subtitle',
        }
        const { container, getByTestId } = render(<Modal {...props} />);

        expect(container).toBeDefined();
        expect(getByTestId('modal-title')).toBeDefined();
        expect(getByTestId('modal-subtitle')).toBeDefined();
        expect(getByTestId('modal-action-button-container')).toBeDefined();
    });

    test('should render the Modal with an info title', () => {
        props = {
            ...props,
            hasTitle: true,
            title: 'title',
            type: MODAL__TASK_EXISTS,
            onCancel: jest.fn(),
        }
        const { container, getByTestId, getByText } = render(<Modal {...props} />);

        expect(container).toBeDefined();
        expect(getByTestId('modal-title')).toBeDefined();
        expect(getByText('title')).toBeTruthy();
    });
});
