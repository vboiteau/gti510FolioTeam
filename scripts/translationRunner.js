const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'client/messages',
    translationsDirectory: 'client/locales',
    languages: ['en', 'fr'],
    singleMessagesFile: true
});

