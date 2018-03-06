import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import FaGithub from 'react-icons/lib/fa/github-square';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';

import styles from './styles.scss';
import config from './config';

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
                        screenName: config.twitter
                    }}
                    options={{
                        username: config.twitter,
                        height: 400,
                        width: 300,
                        theme: 'dark'
                    }}
                />
            </div>
        </div>
        <div className="about__footer">
            <p>
                <a href={`https://github.com/${config.github}`}><FaGithub size={24} /></a>
                <a href={`https://linkedin.com/in/${config.linkedin}`}><FaLinkedIn size={24} /></a>
            </p>
        </div>
    </div>
);
