import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';

export interface ModalEmptyValueProps {
    onConfirm: () => void;
}

export const ModalEmptyValue: React.FC<ModalEmptyValueProps> = ({ onConfirm }) => {
    const { t } = useTranslation();  

    const body = (
        <div>
            <h2>{t('warning')}</h2>
            <div>
                {t('modal_empty_value_message')}
            </div>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>{t('ok')}</Button>
            </div>
        </div>
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
