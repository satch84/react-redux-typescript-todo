import React from 'react';
import { ModalDeleteTaskConfirm, ModalDeleteTasklistConfirm,  ModalEmptyValue, ModalTaskExists } from '../../components/Modal';
import {
    MODAL__DELETE_TASK_CONFIRM,
    MODAL__DELETE_TASKLIST_CONFIRM,
    MODAL__EMPTY_VALUE,
    MODAL__TASK_EXISTS,
} from '../../const/modals';

export interface ModalProps {
    onCancel: () => void;
    onConfirm: () => void;
    type: string;
}

export const Modal: React.FC<ModalProps> = ({ onCancel, onConfirm, type }) => {
    switch (type) {
        case MODAL__DELETE_TASK_CONFIRM:
            return <ModalDeleteTaskConfirm onCancel={onCancel} onConfirm={onConfirm} />;

        case MODAL__DELETE_TASKLIST_CONFIRM:
            return <ModalDeleteTasklistConfirm onCancel={onCancel} onConfirm={onConfirm} />;

        case MODAL__EMPTY_VALUE:
            return <ModalEmptyValue onConfirm={onConfirm} />;

        case MODAL__TASK_EXISTS:
            return <ModalTaskExists onConfirm={onConfirm} />;
        
        default:
            return null;
    }
};
