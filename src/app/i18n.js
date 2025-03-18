"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        debug: true,
        lng: 'en',
        resources: {
            en: {
                translation: {
                    welcome: " Welcome to Carter Forrest School"
                }
            },
            fr: {
                translation: {
                    welcome: "Bienvenue à l'Ecole Carter Forrest "
                }
            }
        }
});