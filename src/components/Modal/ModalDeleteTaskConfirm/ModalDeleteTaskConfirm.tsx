import { Grid, Modal as MuiModal } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import { ModalActions, ModalBody, ModalContent, ModalTitle } from '../Modal.style';

export interface ModalDeleteTaskConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ModalDeleteTaskConfirm: React.FC<ModalDeleteTaskConfirmProps> = ({ onCancel, onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <ModalBody>
            <ModalTitle>{t('confirm_delete_task_title')}</ModalTitle>
            <ModalContent>
                {t('confirm_delete_task')}
            </ModalContent>
            <ModalActions data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('confirm')}</Button>
                <Button color='primary' variant='contained' onClick={onCancel}>{t('cancel')}</Button>
            </ModalActions>
        </ModalBody>
    );

    return (
        <MuiModal
            open={true}
            data-testid='modal-delete-task'
        >
            {body}
        </MuiModal>
    );
};
