import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { Button } from '../../Button';

export interface ModalEmptyValueProps {
    onConfirm: () => void;
}

export const ModalEmptyValue: React.FC<ModalEmptyValueProps> = ({ onConfirm }) => {
    const body = (
        <div>
            <h2>Warning</h2>
            <div>
                Please enter a value in order to add a task to the list!
            </div>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>OK</Button>
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
