import * as React from 'react';
import { NavigationItem, NavigationLink, NavigationList } from './Navigation.style';

export interface HeaderNavigationProps {
    links: { [key: string]: any[] };
}

export const Navigation: React.FC<HeaderNavigationProps> = ({ links }) => (
    <NavigationList>
        {Object.keys(links).map((link, index) =>
            <NavigationItem key={index}>
                <NavigationLink href={links[link][0].url} key={index}>{links[link][0].label}</NavigationLink>
            </NavigationItem>
        )}
    </NavigationList>
);
