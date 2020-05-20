import * as React from 'react';
import { ModalConfirmChoice, ModalEmptyValue, ModalTaskExists } from '../../components/Modal';
import { MODAL__CONFIRM_CHOICE, MODAL__EMPTY_VALUE, MODAL__TASK_EXISTS } from '../../const/modals';

export interface ModalProps {
    onCancel: () => void;
    onConfirm: () => void;
    type: string;
}

export const Modal: React.FC<ModalProps> = ({ onCancel, onConfirm, type }) => {
    switch (type) {
        case MODAL__CONFIRM_CHOICE:
            return <ModalConfirmChoice onCancel={onCancel} onConfirm={onConfirm} />;

        case MODAL__EMPTY_VALUE:
            return <ModalEmptyValue onConfirm={onConfirm} />;

        case MODAL__TASK_EXISTS:
            return <ModalTaskExists onConfirm={onConfirm} />;
        
        default:
            return null;
    }
};
