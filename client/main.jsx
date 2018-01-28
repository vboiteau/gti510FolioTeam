import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import enMessages from './locales/en';
import frMessages from './locales/fr';
import { navigatorParentLanguage } from './utilities';

import App from './components/App/';

addLocaleData([...en, ...fr]);

const messages = {
    en: enMessages,
    fr: frMessages
};

ReactDOM.render(
    <AppContainer>
        <IntlProvider locale={navigator.language} messages={messages[navigatorParentLanguage]}>
            <HashRouter>
                <App />
            </HashRouter>
        </IntlProvider>
    </AppContainer>,
    document.getElementById('root')
);

/* eslint no-undef: 0, global-require: 0 */
if (module.hot) {
    module.hot.accept('./components/App/', () => {
        const NextApp = require('./components/App').default;
        render(
            <AppContainer>
                <IntlProvider locale={navigator.language} messages={messages[navigatorParentLanguage]}>
                    <HashRouter>
                        <NextApp />
                    </HashRouter>
                </IntlProvider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
