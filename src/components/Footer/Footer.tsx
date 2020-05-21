import React from 'react';
import { useTranslation } from 'react-i18next';
import { routeCredits, routeHome } from '../../const/routes';
import { Navigation } from '../Navigation'; 
import { MainFooterStyled } from './Footer.style';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    const footerLinks = {
        'home': [
            {
                'label': t('to_do_app'),
                'url': routeHome,
            },
        ],
        'credits': [
            {
                'label': t('credits'),
                'url': routeCredits,
            },
        ],
    };

    return(
        <MainFooterStyled>
            <Navigation links={footerLinks} />
        </MainFooterStyled>
    );
};
