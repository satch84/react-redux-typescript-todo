import { withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const MainHeaderStyled = withTheme(styled.div`
    background-color: ${props => props.theme.palette.primary.contrastText};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`);
