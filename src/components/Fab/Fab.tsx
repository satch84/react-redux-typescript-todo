import { Fab as MuiFab } from '@material-ui/core';
import * as React from 'react';

interface FabProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}

const Fab: React.FC<FabProps> = ({ children, onClick, color, size }) => (
    <MuiFab children={children} onClick={onClick} color={color} size={size} />
);

export { Fab };
