import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

import style from './style';
import HelmetIntl from './HelmetIntl';

export default () => (
    <div>
        <HelmetIntl/>
        <h1>
            <FormattedMessage
                id='app.title'
                description='App title'
                defaultMessage='Student Folio'
            />
        </h1>
    </div>
);
