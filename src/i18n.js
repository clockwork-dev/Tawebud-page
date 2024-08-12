import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationPL from './locales/pl/translation.json';
import translationBR from './locales/br/translation.json';
import translationDE from './locales/de/translation.json';

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
  .use(initReactI18next) // подключаем react-i18next
  .init({
    resources,
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en', // язык по умолчанию при отсутствии перевода
    interpolation: {
      escapeValue: false, // реагирует на XSS-атаки
    },
  });

export default i18n;