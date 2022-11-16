const path = require('node: path');

module.exports = {
  i18n: {
    defaultLocale: 'default',
    locales: ['default', 'en', 'fa'],

    reloadOnPrerender: process.env.NODE_ENV === 'development',

    localePath: path.resolve('./public/locales'),
  },

  otherLanguages: ['en', 'fa'],
  defaultLanguage: 'en',
  fallbackLng: ['en'],
};
