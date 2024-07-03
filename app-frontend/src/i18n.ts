import { createI18n, type I18nOptions } from 'vue-i18n'

import enUS from './locales/en-US.json'
import frFR from './locales/fr-FR.json'

const options: I18nOptions = {
  legacy: false,
  locale: 'ja-JP',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'fr-FR': frFR,
  },
}
export const i18n = createI18n<false, typeof options>(options)
