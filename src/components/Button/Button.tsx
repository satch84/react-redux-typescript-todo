import { Button as MuiButton } from '@material-ui/core';
import React from 'react';

export interface ButtonProps {
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'outlined' | 'contained';
    isDisabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    dataTestId?: string;
    children?: string;
}

export const Button: React.FC<ButtonProps> = ({ dataTestId, children, isDisabled, fullWidth, variant, onClick, color, size }) => (
    <MuiButton
        disabled={isDisabled}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        onClick={onClick}
        color={color}
        data-testid={dataTestId}
    >
        {children}
    </MuiButton>
);
