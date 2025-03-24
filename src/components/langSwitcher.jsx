'use client';

import React from 'react'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

const LangSwitcher = () => {
    const [t, i8n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18next.changeLanguage(lang);
    };

  return (
    <div>
        <Button onClick={()=> handleChangeLanguage("en")}>EN</Button>
        <Button onClick={()=> handleChangeLanguage("es")}>ES</Button>
        <Button onClick={()=> handleChangeLanguage("fr")}>FR</Button>
    </div>
  )
};

export default LangSwitcher;