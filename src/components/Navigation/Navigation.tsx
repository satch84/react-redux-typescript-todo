import React from 'react';
import { history } from '../../helpers';
import { NavigationItem, NavigationLink, NavigationList } from './Navigation.style';

export interface NvigationProps {
    links: { [key: string]: any[] };
}

export const Navigation: React.FC<NvigationProps> = ({ links }) => {
    const handleNavigate = (url: string) => () => {
        history.push(url);
    };

    return(
        <NavigationList>
            {Object.keys(links).map((link, index) =>
                <NavigationItem key={index}>
                    <NavigationLink onClick={handleNavigate(links[link][0].url)} key={index}>{links[link][0].label}</NavigationLink>
                </NavigationItem>
            )}
        </NavigationList>
    );
};
