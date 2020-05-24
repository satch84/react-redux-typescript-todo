import { Modal as MuiModal } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import { ModalActions, ModalBody, ModalContent, ModalTitle } from '../Modal.style';

export interface ModalTaskExistsProps {
    onConfirm: () => void;
}

export const ModalTaskExists: React.FC<ModalTaskExistsProps> = ({ onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <ModalBody>
            <ModalTitle><ErrorOutlineIcon /> {t('attention')}</ModalTitle>
            <ModalContent>
                {t('modal_task_exists_message')}
            </ModalContent>
            <ModalActions data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('ok')}</Button>
            </ModalActions>
        </ModalBody>
    );

    return (
        <MuiModal
            open={true}
            data-testid='modal-task-exists'
        >
            {body}
        </MuiModal>
    );
};
