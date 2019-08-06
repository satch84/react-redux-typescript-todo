import * as React from 'react';
import { MainFooterStyled } from './Footer.style';
import { FooterNavigation } from '../Navigation'; 

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
