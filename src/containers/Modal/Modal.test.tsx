import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { render } from "@testing-library/react";
import React from 'react';
import { Provider } from 'react-redux';
import {
    MODAL__DELETE_TASK_CONFIRM,
    MODAL__DELETE_TASKLIST_CONFIRM,
    MODAL__EMPTY_VALUE,
    MODAL__TASK_EXISTS,
} from '../../const/modals';
import { configureStore } from '../../redux/store';
import { theme } from '../../styledComponents/theme';
import { Modal, ModalProps } from './Modal';

const onCancel = jest.fn();
const onConfirm = jest.fn();

describe('Modal', () => {
    let props: ModalProps;

    const { store } = configureStore();

    const create = () => render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Modal {...props} />
            </ThemeProvider>
        </Provider>
    );

    beforeEach(() => {
        props = {
            onCancel,
            onConfirm,
            type: '',
        };
    });

    it('Should not render any specific modal', () => {
        const modal = create();
        expect(modal).toBeDefined();
    });

    it('Should render the ModalConfirmChoice', () => {
        props.type = MODAL__DELETE_TASK_CONFIRM;
        const { container, getByTestId } = create();

        const confirmChoiceModal = getByTestId('modal-delete-task');
        expect(container).toBeDefined();
        expect(confirmChoiceModal).toBeDefined();
    });

    it('Should render the ModalConfirmChoice', () => {
        props.type = MODAL__DELETE_TASKLIST_CONFIRM;
        const { container, getByTestId } = create();

        const confirmChoiceModal = getByTestId('modal-delete-tasklist');
        expect(container).toBeDefined();
        expect(confirmChoiceModal).toBeDefined();
    });

    it('Should render the ModalEmptyValue', () => {
        props.type = MODAL__EMPTY_VALUE;
        const { container, getByTestId } = create();

        const emptyValueModal = getByTestId('modal-empty-value');
        expect(container).toBeDefined();
        expect(emptyValueModal).toBeDefined();
    });

    it('Should render the ModalTaskExists', () => {
        props.type = MODAL__TASK_EXISTS;
        const { container, getByTestId } = create();

        const modalTaskExists = getByTestId('modal-task-exists');
        expect(container).toBeDefined();
        expect(modalTaskExists).toBeDefined();
    });
});
