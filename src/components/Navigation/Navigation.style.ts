import { withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const NavigationList = withTheme(styled.ul`
    color: ${props => props.theme.palette.common.white};
`);

export const NavigationItem = withTheme(styled.li`
    color: ${props => props.theme.palette.common.white};
    cursor: pointer;
    display: inline;
    margin: 0 10px;
`);

export const NavigationLink = withTheme(styled.span`
    color: ${props => props.theme.palette.common.white};
    text-transform: capitalize;
    text-decoration: none;
`);
