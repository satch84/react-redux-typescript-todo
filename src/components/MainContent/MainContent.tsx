import React from 'react';
import { MainContentStyled } from './MainContent.style';

export interface MainContentProps {
    children: React.ReactNode;
}

export const MainContent: React.FC <MainContentProps> = ({ children }) => (
    <MainContentStyled>{children}</MainContentStyled>
);
