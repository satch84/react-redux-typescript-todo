import { Fab as MuiFab } from '@material-ui/core';
import React from 'react';

export interface FabProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    dataTestId?: string;
}

export const Fab: React.FC<FabProps> = ({ dataTestId, children, onClick, color, size }) => (
    <MuiFab children={children} onClick={onClick} color={color} size={size} data-testid={dataTestId} />
);
