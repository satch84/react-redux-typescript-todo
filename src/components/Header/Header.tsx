import * as React from 'react';
import { MainHeaderStyled } from './Header.style';
import { HeaderNavigation } from '../Navigation'; 

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
