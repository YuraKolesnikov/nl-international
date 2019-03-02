const config = {
  mongoURI: 'process mode development и вся хуйня',
  port: process.env.PORT || 3000,
  i18nOptions: {
    defaultLang: 'ru',
    siteLangs: ['ru', 'lv']
  }
}

module.exports = config