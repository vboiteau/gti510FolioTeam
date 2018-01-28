import { FormattedMessage } from 'react-intl';
import React from 'react';

import projectsList from './../data/projectsList';
import Item from './Item';

const List = projectsList.map(({ name, shortDesc, slug }) => (
    <Item
        key={slug}
        name={name}
        shortDesc={shortDesc}
        slug={slug}
    />
));

export default () => (
    <div>
        <h1>
            <FormattedMessage
                id="projects.title"
                description="Projects List"
                defaultMessage="Projects List"
            />
        </h1>
        <ul>
            {List}
        </ul>
    </div>
);
