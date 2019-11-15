const config = {
  /* Delete second option when deploying! */
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/nl_international',
  port: process.env.PORT || 3000,
  secret: process.env.secret,
  i18nOptions: {
    defaultLang: 'ru',
    siteLangs: ['ru', 'lv']
  }
}

module.exports = config