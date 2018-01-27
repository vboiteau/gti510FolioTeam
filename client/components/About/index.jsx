import { FormattedMessage } from 'react-intl';
import React from 'react';

export default () => (
    <div>
        <h1>
            <FormattedMessage
                id="about.title"
                description="About Me page title"
                defaultMessage="About Me"
            />
        </h1>
        <p>
            <FormattedMessage
                Message
                id="about.description"
                description="About me description text"
                defaultMessage="student description"
            />
        </p>
    </div>
);
