import styled from 'styled-components';
import { MAIN_CONTENT_HEIGHT } from '../../const/responsive';

export const MainContentStyled = styled.div`
    box-sizing: border-box;
    height: ${MAIN_CONTENT_HEIGHT};
    overflow-y: scroll;
    padding: 20px;
    width: 100%;
`;
