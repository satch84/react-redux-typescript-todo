import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';

export interface ModalConfirmChoiceProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ModalConfirmChoice: React.FC<ModalConfirmChoiceProps> = ({ onCancel, onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <div>
            <h2>{t('confirm_action')}</h2>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('confirm')}</Button>
                <Button color='primary' variant='contained' onClick={onCancel}>{t('cancel')}</Button>
            </div>
        </div>
    );

    return (
        <MuiModal
            open={true}
            data-testid='modal-confirm-choice'
        >
            {body}
        </MuiModal>
    );
};
