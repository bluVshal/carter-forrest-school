import React from 'react';
import { Button } from './ui/button';
import { useTranslation } from 'next-i18next'

const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="btn-container">
            {languages.map((language) => {
                return <Button key={language.code} onClick={() => changeLanguage(language.code)}>{language.lang}</Button>
            })}
        </div>
    )
};

export default LanguageSelector;