"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        debug: true,
        lng: 'en',
        resources: {
            en: {
                translation: {
                    accounting:"Accounting",
                    students:"Students",
                    teachers:"Teachers",
                    welcome: " Welcome to Carter Forrest School",
                }
            },
            fr: {
                translation: {
                    accounting:"Comptabilité",
                    students: "Étudiants",
                    teachers: "Enseignants",
                    welcome: "Bienvenue à l'École Carter Forrest "
                }
            }
        }
});

