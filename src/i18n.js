import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationPL from './locales/pl/translation.json';
import translationBR from './locales/br/translation.json';
import translationDE from './locales/de/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  pl: {
    translation: translationPL
  },
  br: {
    translation: translationBR
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;