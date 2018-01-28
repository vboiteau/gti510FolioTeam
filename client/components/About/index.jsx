import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Timeline } from 'react-twitter-widgets';

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
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'r_etsmtl'
            }}
            options={{
                username: 'r_etsmtl',
                height: 400,
                width: 300
            }}
        />
    </div>
);
