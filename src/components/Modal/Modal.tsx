import { Modal as MuiModal } from '@material-ui/core';
import * as React from 'react';
import { MODAL__CONFIRM_CHOICE } from '../../const/modals';
import { Button } from '../Button';

export interface ModalProps {
    action?: boolean;
    buttonText?: string;
    content: React.ReactNode;
    title?: string;
    hasTitle: boolean;
    isOpened: boolean;
    subtitle?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    type: string;
}

export const Modal: React.FC<ModalProps> = ({
    action,
    buttonText,
    hasTitle,
    isOpened,
    content,
    onCancel,
    onConfirm,
    title,
    subtitle,
    type,
}) => {
    const body = (
        <div>
            {hasTitle && 
                <h2 data-testid='modal-title'>
                    {title}
                </h2>
            }
            {subtitle && <h3 data-testid='modal-subtitle'>{subtitle}</h3>}
            <p>
                {content}
            </p>
            {action &&
                <div data-testid='modal-action-button-container'>
                    <Button color='primary' variant='contained' onClick={onConfirm}>{buttonText}</Button>
                    {onCancel && type === MODAL__CONFIRM_CHOICE &&
                        <Button color='primary' variant='contained' onClick={onCancel}>Cancel</Button>
                    }
                </div>
            }
        </div>
    );

    return (
        <MuiModal
            open={isOpened}
        >
            {body}
        </MuiModal>
    );
};
