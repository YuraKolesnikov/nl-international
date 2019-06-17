import Vue from 'vue'
import I18n from 'vue-i18n'

import ru from './ru.json'
import lv from './lv.json'

Vue.use(I18n)

export const i18n = new I18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {ru, lv}
})