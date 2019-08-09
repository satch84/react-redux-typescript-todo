import { withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const NavigationList = withTheme(styled.ul`
    color: ${props => props.theme.palette.common.white};
`);

export const NavigationItem = withTheme(styled.li`
    color: ${props => props.theme.palette.common.white};
    display: inline;
    font-weight: 600;
    margin: 0 10px;
`);

export const NavigationLink = withTheme(styled.a`
    color: ${props => props.theme.palette.common.white};
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
`);
