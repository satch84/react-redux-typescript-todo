import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { routeHome } from '../../const/routes';
import { Navigation } from '../Navigation'; 
import { MainHeaderStyled } from './Header.style';

export const Header: React.FC = () => {
    const { t } = useTranslation();

    const headerLinks = {
        'accueil': [
            {
                'label': t('to_do_app'),
                'url': routeHome,
            },
        ],
    };

    return(
        <MainHeaderStyled>
            <Navigation links={headerLinks} />
        </MainHeaderStyled>
    );
};
