import { withTheme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

export const FormControlStyled = withTheme(styled(FormControl)`
    position: absolute !important;
    top: 10px;
    right: 20px;

    > div > div {
        color: ${props => props.theme.palette.common.white} !important;
    } 
`);

export const MenuItemStyled = withTheme(styled(MenuItem)`
    color: ${props => props.theme.palette.primary.dark} !important;
    font-size: 1rem !important;
`);
