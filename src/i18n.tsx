import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import englishTranslation from './assets/translations/en-us.json';
import portugueseTranslation from './assets/translations/pt-br.json';

const resources = {
  en: {
    translation: englishTranslation,
  },
  pt: {
    translation: portugueseTranslation,
  },
};

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources,
  supportedLngs: ['en', 'pt'],
  fallbackLng: 'en',
  detection: {
    order: ['cookie', 'navigator'],
    caches: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
