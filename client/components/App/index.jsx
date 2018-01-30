import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import HelmetIntl from './HelmetIntl';
import MainSwitch from './MainSwitch';
import Navigation from './Navigation';

export default () => (
    <div className="app">
        <HelmetIntl />
        <div className="app__header">
            <p className="app__siteTitle">
                <Link to="/" className="app__siteTitle__link" >
                    <FormattedMessage
                        id="app.title"
                        description="App title"
                        defaultMessage="Student Folio"
                    />
                </Link>
            </p>
            <Navigation />
        </div>
        <MainSwitch />
    </div>
);
