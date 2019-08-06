import * as React from 'react';

interface HeaderNavigationProps {
    links: { [key: string]: any[] };
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = props => (
    <>
        {Object.keys(props.links).map((link, index) =>
            <a href={props.links[link][0].url} key={index}>{props.links[link][0].label}</a>
        )}
    </>
);

export { HeaderNavigation };
