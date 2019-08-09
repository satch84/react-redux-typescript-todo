import { withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const MainFooterStyled = withTheme(styled.div`
    background-color: ${props => props.theme.palette.primary.contrastText};
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    position: absolute;
    width: 100%;
`);
