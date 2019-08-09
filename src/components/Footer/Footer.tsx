import * as React from 'react';
import { routeCredits, routeHome } from '../../const/routes';
import { FooterNavigation } from '../Navigation'; 
import { MainFooterStyled } from './Footer.style';

const footerLinks = {
    'accueil': [
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

const Footer: React.FC = () => (
    <MainFooterStyled>
        <FooterNavigation links={footerLinks} />
    </MainFooterStyled>
);

export { Footer };
