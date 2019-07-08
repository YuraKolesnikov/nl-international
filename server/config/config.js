const config = {
  /* Delete second option when deploying! */
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://heroku_mvhqfvgg:aafbpcdcbnl7pq6j50kbok59rf@ds151805.mlab.com:51805/heroku_mvhqfvgg',
  port: process.env.PORT || 3000,
  secret: process.env.secret,
  i18nOptions: {
    defaultLang: 'ru',
    siteLangs: ['ru', 'lv']
  }
}

module.exports = config