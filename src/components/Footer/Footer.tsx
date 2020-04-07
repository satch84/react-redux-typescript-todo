import * as React from 'react';
import { routeCredits, routeHome } from '../../const/routes';
import { Navigation } from '../Navigation'; 
import { MainFooterStyled } from './Footer.style';

const footerLinks = {
    'home': [
        { 
            'label': 'ToDo App',
            'url': routeHome,
        },
    ],
    'credits': [
        {
            'label': 'Credits',
            'url': routeCredits,
        },
    ],
};

export const Footer: React.FC = () => (
    <MainFooterStyled>
        <Navigation links={footerLinks} />
    </MainFooterStyled>
);
