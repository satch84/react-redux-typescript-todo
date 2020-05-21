import { Button as MuiButton } from '@material-ui/core';
import React from 'react';

export interface ButtonProps {
    children: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'outlined' | 'contained';
    isDisabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    dataTestId?: string;
}

export const Button: React.FC<ButtonProps> = ({ dataTestId, isDisabled, fullWidth, variant, children, onClick, color, size }) => (
    <MuiButton
        disabled={isDisabled}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        children={children}
        onClick={onClick}
        color={color}
        data-testid={dataTestId}
    />
);
