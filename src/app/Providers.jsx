"use client"

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from '../translations/en/global.json';
import global_es from '../translations/es/global.json';
import global_fr from '../translations/fr/global.json';

export function Providers({ children }) {

    i18next.init({
      interpolation: {
        escapeValue: false,
      },
      lng: "en",
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

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
