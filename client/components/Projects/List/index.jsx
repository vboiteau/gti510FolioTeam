import { FormattedMessage } from 'react-intl';
import React from 'react';

import projectsList from './../data/projectsList';
import Item from './Item';
import styles from './styles.scss';

const List = projectsList.map(({ name, shortDesc, slug }) => (
    <Item
        key={slug}
        name={name}
        shortDesc={shortDesc}
        slug={slug}
    />
));

export default () => (
    <div className="projects__list">
        <h1 className="projects__list__title">
            <FormattedMessage
                id="projects.title"
                description="Projects List"
                defaultMessage="Projects List"
            />
        </h1>
        <ul className="projects__list__body">
            {List}
        </ul>
    </div>
);
