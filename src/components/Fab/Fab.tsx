import { Fab as MuiFab } from '@material-ui/core';
import React from 'react';

export interface FabProps {
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    dataTestId?: string;
    children?: React.ReactNode;
}

export const Fab: React.FC<FabProps> = ({ children, dataTestId, onClick, color, size }) => (
    <MuiFab onClick={onClick} color={color} size={size} data-testid={dataTestId}>
        {children}
    </MuiFab>
);
