import * as React from 'react';
import { FooterNavigation } from '../Navigation'; 
import { MainFooterStyled } from './Footer.style';

const footerLinks = {
    'accueil': [
        { 
            'label': 'Accueil',
            'url': './',
        },
    ],
    'credits': [
        { 
            'label': 'Crédits',
            'url': '/credits',
        },
    ],
};

const Footer: React.FC <{}> = () => (
    <MainFooterStyled>
        <FooterNavigation links={footerLinks} />
    </MainFooterStyled>
);

export { Footer };
