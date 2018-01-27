import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './styles.scss';
import HelmetIntl from './HelmetIntl';
import MainSwitch from './MainSwitch';

export default () => (
    <div>
        <HelmetIntl />
        <p className="site-title">
            <FormattedMessage
                id="app.title"
                description="App title"
                defaultMessage="Student Folio"
            />
        </p>
        <MainSwitch />
    </div>
);
