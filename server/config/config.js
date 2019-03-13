const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  port: process.env.PORT || 3000,
  i18nOptions: {
    defaultLang: 'ru',
    siteLangs: ['ru', 'lv']
  }
}

module.exports = config