import * as React from 'react';
import { MainContentStyled } from './MainContent.style';

interface MainContentProps {
    children: React.ReactNode;
}

const MainContent: React.FC <MainContentProps> = props => (
    <MainContentStyled>{props.children}</MainContentStyled>
);

export { MainContent };
