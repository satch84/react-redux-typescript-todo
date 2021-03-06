import { Modal as MuiModal } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import { ModalActions, ModalBody, ModalContent, ModalTitle } from '../Modal.style';

export interface ModalDeleteTasklistConfirmProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ModalDeleteTasklistConfirm: React.FC<ModalDeleteTasklistConfirmProps> = ({ onCancel, onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <ModalBody>
            <ModalTitle><WarningIcon /> {t('confirm_delete_tasklist_title')}</ModalTitle>
            <ModalContent>
                {t('confirm_delete_tasklist')}
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
            data-testid='modal-delete-tasklist'
        >
            {body}
        </MuiModal>
    );
};
