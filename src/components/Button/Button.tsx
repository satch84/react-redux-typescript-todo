import { Button as MuiButton } from '@material-ui/core';
import * as React from 'react';

interface ButtonProps {
    children: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'outlined' | 'contained';
}

const Button: React.FC<ButtonProps> = props => (
    <MuiButton variant={props.variant} children={props.children} onClick={props.onClick} color={props.color} />
);

export { Button };