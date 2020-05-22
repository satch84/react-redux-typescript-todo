import { Grid, withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const ModalBody = withTheme(styled.div`
    background-color: ${props => props.theme.palette.common.white};
    border: 2px solid ${props => props.theme.palette.primary.dark};
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 20px;
    width: 30%;
`);

export const ModalContent = withTheme(styled.div`
    margin-bottom: 30px;
`);

export const ModalActions = withTheme(styled.div`
    text-align: center;

    button {
        margin: 0 10px;
    }
`);

export const ModalTitle = withTheme(styled.h2`
    margin-top: 0;
`);
