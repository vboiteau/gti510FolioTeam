import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HashRouter, Route, Redirect }  from 'react-router';

import style from './style';
import HelmetIntl from './HelmetIntl';

export default () => (
    <div>
        <HelmetIntl/>
        <p className="site-title">
            <FormattedMessage
                id='app.title'
                description='App title'
                defaultMessage='Student Folio'
            />
        </p>
    </div>
);
