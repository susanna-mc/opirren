const path = require('path');

module.exports = {
  i18n: {
    locales: ['default', 'en', 'fa'],
    defaultLocale: 'default',

    localeDetection: false,
    reloadOnPrerender: false,
    localePath: path.resolve('./public/locales'),

    otherLanguages: ['en', 'fa'],

    fallbackLng: ['en'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
};
