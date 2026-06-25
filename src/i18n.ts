'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'


const resources = {
  en: {
    translation: {
      navbar: { home: 'Home', services: 'Services', whosWho: "Who's Who", career: 'Career', login: 'Login' },
        }
  },
  hi: {
    translation: {
      navbar: { home: 'होम', services: 'सेवाएं', whosWho: 'कौन क्या है', career: 'करियर', login: 'लॉगिन' },
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  })

export default i18n