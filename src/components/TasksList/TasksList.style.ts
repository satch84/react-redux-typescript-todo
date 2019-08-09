import { Typography, withTheme } from '@material-ui/core';
import styled from 'styled-components';

export const TaskItemList = styled.ul`
    list-style-type: none;
    margin: 0 0 50px;
    padding: 0;
`;

export const TaskItem = withTheme(styled.li`
    background-color: ${props => props.theme.palette.background.paper};
    border-bottom: 2px solid ${props => props.theme.palette.background.paper};
    border-radius: 5px;
    box-shadow: 0px 2px 3px #ccc;
    font-weight: 400;
    margin-bottom: 20px;
    padding: 10px 20px;

    & button {
        margin-left: 20px;
    }
`);

export const TaskDateWrapper = styled.div`
    margin-bottom: 3px;
`;

export const TaskContent = styled(Typography)`
    && {
        font-weight: 600;
    }
`;

export const TaskContentWrapper = styled.div`
    margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
