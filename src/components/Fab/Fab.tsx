import * as React from 'react';
import { Fab as MuiFab } from '@material-ui/core';

interface FabProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
}

const Fab: React.FC<FabProps> = props => (
    <MuiFab children={props.children} onClick={props.onClick} color={props.color} />
);

export { Fab };