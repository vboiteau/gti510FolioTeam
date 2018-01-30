import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Timeline } from 'react-twitter-widgets';

import styles from './styles.scss';

export default () => (
    <div className="about">
        <h1 className="about__title">
            <FormattedMessage
                id="about.title"
                description="About Me page title"
                defaultMessage="About Me"
            />
        </h1>
        <div className="about__content">
            <div className="main">
                <p>
                    <FormattedMessage
                        Message
                        id="about.description"
                        description="About me description text"
                        defaultMessage="student description"
                    />
                </p>
            </div>
            <div className="sidebar">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'r_etsmtl'
                    }}
                    options={{
                        username: 'r_etsmtl',
                        height: 400,
                        width: 300,
                        theme: 'dark'
                    }}
                />
            </div>
        </div>
        <div className="about__footer" />
    </div>
);
