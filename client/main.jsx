import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import enMessages from './locales/en';
import frMessages from './locales/fr';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App/';

console.dir(en);

addLocaleData([...en, ...fr]);

const messages = {
    en: enMessages,
    fr: frMessages
};

ReactDOM.render(
    <AppContainer>
        <IntlProvider locale={navigator.language} messages={messages[navigator.language.split('-')[0]]}>
            <App />
        </IntlProvider>
    </AppContainer>, document.getElementById('root'));
/* eslint no-undef: 0, global-require: 0 */
if (module.hot) {
    module.hot.accept('./components/App/', () => {
        console.log('index.jsx HMR');
        const NextApp = require('./components/App').default;
        render(<AppContainer><IntlProvider locale={navigator.language} messages={messages[navigator.language.split('-')[0]]}><NextApp /></IntlProvider></AppContainer>, document.getElementById('root'));
    });
}
