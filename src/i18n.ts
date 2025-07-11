import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'fr',
  debug: true,
  load: 'languageOnly',
  resources: {
    fr: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      translation: require('./locales/fr.yml').default.fr,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
