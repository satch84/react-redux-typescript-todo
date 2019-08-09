import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const FormWrapper = styled.div`
    margin-bottom: 50px;

    & fieldset {
        margin-bottom: 10px;
    }
`;

export const FormTitle = styled(Typography)`
    && {
        margin-bottom: 10px;
    }
`;
