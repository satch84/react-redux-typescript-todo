import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { Button } from '../../Button';

export interface ModalConfirmChoiceProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ModalConfirmChoice: React.FC<ModalConfirmChoiceProps> = ({ onCancel, onConfirm }) => {
    const body = (
        <div>
            <h2>Do you confirm?</h2>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>Confirm</Button>
                <Button color='primary' variant='contained' onClick={onCancel}>Cancel</Button>
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
