import * as React from 'react';
import { routeHome } from '../../const/routes';
import { Navigation } from '../Navigation'; 
import { MainHeaderStyled } from './Header.style';

const headerLinks = {
    'accueil': [
        { 
            'label': 'ToDo App',
            'url': routeHome,
        },
    ],
};

export const Header: React.FC = () => (
    <MainHeaderStyled>
        <Navigation links={headerLinks} />
    </MainHeaderStyled>
);
