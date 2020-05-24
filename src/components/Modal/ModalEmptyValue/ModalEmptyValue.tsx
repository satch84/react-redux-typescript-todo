import { Modal as MuiModal } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import { ModalActions, ModalBody, ModalContent, ModalTitle } from '../Modal.style';

export interface ModalEmptyValueProps {
    onConfirm: () => void;
}

export const ModalEmptyValue: React.FC<ModalEmptyValueProps> = ({ onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <ModalBody>
            <ModalTitle><InfoIcon /> {t('info')}</ModalTitle>
            <ModalContent>
                {t('modal_empty_value_message')}
            </ModalContent>
            <ModalActions data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('ok')}</Button>
            </ModalActions>
        </ModalBody>
    );

    return (
        <MuiModal
            open={true}
            data-testid='modal-empty-value'
        >
            {body}
        </MuiModal>
    );
};
