import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from './styles.scss';

export default () => (
    <div className="app__nav">
        <NavLink
            to="/projects"
            activeClassName="app__nav__link--selected"
            className="app__nav__link"
        >
            <FormattedMessage
                id="projects.title"
            />
        </NavLink>
        <NavLink
            to="/about"
            className="app__nav__link"
            activeClassName="app__nav__link--selected"
        >
            <FormattedMessage
                id="about.title"
            />
        </NavLink>
    </div>
);
