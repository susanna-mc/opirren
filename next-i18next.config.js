const path = require('path');

module.exports = {
  i18n: {
    locales: ['default', 'en', 'fa'],
    defaultLocale: 'default',

    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),

  otherLanguages: ['en', 'fa'],
  defaultLanguage: ['en'],
  fallbackLng: ['en'],
};
