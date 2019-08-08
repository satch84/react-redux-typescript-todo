import * as React from 'react';

interface FooterNavigationProps {
    links: { [key: string]: any[] };
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ links }) => (
    <>
        {Object.keys(links).map((link, index) =>
            <a href={links[link][0].url} key={index}>{links[link][0].label}</a>
        )}
    </>
);

export { FooterNavigation };
