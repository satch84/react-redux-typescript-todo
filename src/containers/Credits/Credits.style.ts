import { withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const CreditContentStyled = withTheme(styled.div`
    background-color: ${props => props.theme.palette.background.paper};
    border-bottom: 2px solid ${props => props.theme.palette.background.paper};
    border-radius: 5px;
    box-shadow: 0px 2px 3px #ccc;
    padding: 20px;
`);

export const ContentStyled = withTheme(styled.div`
    margin-bottom: 20px;
`);

export const LinkContainerStyle = withTheme(styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    a {
        color: ${props => props.theme.palette.primary.main};
    }
`);