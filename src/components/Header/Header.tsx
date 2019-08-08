import * as React from 'react';
import { HeaderNavigation } from '../Navigation'; 
import { MainHeaderStyled } from './Header.style';

const headerLinks = {
    'accueil': [
        { 
            'label': 'Accueil',
            'url': './',
        },
    ],
    'list': [
        {
            'label': 'To Do List',
            'url': '/to-do-list',
        },
    ],
};

const Header: React.FC <{}> = () => (
    <MainHeaderStyled>
        <HeaderNavigation links={headerLinks} />
    </MainHeaderStyled>
);

export { Header };
