import { Typography, withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const TasksListWrapper = styled.ul`
    list-style-type: none;
    margin: 0 0 50px;
    padding: 0;
`;

export const TasksListTitle = styled(Typography)`
    && {
        margin-bottom: 10px;
    }
`;

export const TasksListItem = withTheme(styled.li`
    border-bottom: 1px solid ${props => props.theme.palette.background.paper};
    font-weight: 400;
    margin-bottom: 5px;
    padding-bottom: 5px;
`);
