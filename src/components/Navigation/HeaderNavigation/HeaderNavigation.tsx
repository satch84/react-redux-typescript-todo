import * as React from 'react';

interface HeaderNavigationProps {
    links: { [key: string]: any[] };
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ links }) => (
    <>
        {Object.keys(links).map((link, index) =>
            <a href={links[link][0].url} key={index}>{links[link][0].label}</a>
        )}
    </>
);

export { HeaderNavigation };
