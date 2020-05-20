import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { Button } from '../../Button';

export interface ModalTaskExistsProps {
    onConfirm: () => void;
}

export const ModalTaskExists: React.FC<ModalTaskExistsProps> = ({ onConfirm }) => {
    const body = (
        <div>
            <h2>Attention</h2>
            <div>
                This task already exists, please enter a new task to the list!
            </div>
            <div data-testid='modal-action-button-container'>
                <Button color='primary' variant='contained' onClick={onConfirm}>OK</Button>
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
