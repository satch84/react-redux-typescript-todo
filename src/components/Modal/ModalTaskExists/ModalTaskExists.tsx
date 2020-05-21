import { Modal as MuiModal } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';

export interface ModalTaskExistsProps {
    onConfirm: () => void;
}

export const ModalTaskExists: React.FC<ModalTaskExistsProps> = ({ onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <div>
            <h2>{t('attention')}</h2>
            <div>
                {t('modal_task_exists_message')}
            </div>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('ok')}</Button>
            </div>
        </div>
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
