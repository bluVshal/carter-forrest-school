"use client"

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from '../translations/en/global.json';
import global_es from '../translations/es/global.json';
import global_fr from '../translations/fr/global.json';
import { store } from './store/store';
import { Provider } from 'react-redux';

export function Providers({ children }) {
  const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  };

  let usedLang = useEffect(() => {
     localStorage.getItem("language") ? JSON.parse(localStorage.getItem("language")) : 'en';
  }, []);

  i18next.init({
    interpolation: {
      escapeValue: false,
    },
    detection: DETECTION_OPTIONS,
    lng: usedLang,
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      },
      fr: {
        global: global_fr
      },
    }
  });

  i18next
    .use(LanguageDetector)
    .use(initReactI18next)

  return <I18nextProvider i18n={i18next}><Provider store={store}>{children}</Provider></I18nextProvider>;
}
