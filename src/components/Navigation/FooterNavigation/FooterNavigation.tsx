import * as React from 'react';

interface FooterNavigationProps {
    links: { [key: string]: any[] };
}

const FooterNavigation: React.FC<FooterNavigationProps> = props => (
    <>
        {Object.keys(props.links).map((link, index) =>
            <a href={props.links[link][0].url} key={index}>{props.links[link][0].label}</a>
        )}
    </>
);

export { FooterNavigation };
