import * as React from 'react';
import { routeHome } from '../../const/routes';
import { HeaderNavigation } from '../Navigation'; 
import { MainHeaderStyled } from './Header.style';

const headerLinks = {
    'accueil': [
        { 
            'label': 'Accueil',
            'url': routeHome,
        },
    ],
};

const Header: React.FC <{}> = () => (
    <MainHeaderStyled>
        <HeaderNavigation links={headerLinks} />
    </MainHeaderStyled>
);

export { Header };
