import { Button as MuiButton } from '@material-ui/core';
import * as React from 'react';

interface ButtonProps {
    children: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'outlined' | 'contained';
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isDisabled, variant, children, onClick, color }) => (
    <MuiButton disabled={isDisabled} variant={variant} children={children} onClick={onClick} color={color} />
);

export { Button };