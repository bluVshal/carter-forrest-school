'use client';

import React, { useEffect } from 'react'
import { Button } from './ui/button';
import i18next from "i18next";

const LangSwitcher = (props) => {
  const { usedLang } = props;
  useEffect(() => {
    deactivateBtn(usedLang);
  });

  const handleChangeLanguage = (e, lang) => {
    i18next.changeLanguage(lang);
    deactivateBtn(lang);
  };

  const deactivateBtn = (lang) => { /* need to find a React Js alternative */
    switch (lang) {
      case "fr":
        document.getElementById('btn_es').disabled = false;
        document.getElementById('btn_fr').disabled = true;
        document.getElementById('btn_en').disabled = false;
        break;

      case "es":
        document.getElementById('btn_es').disabled = true;
        document.getElementById('btn_fr').disabled = false;
        document.getElementById('btn_en').disabled = false;
        break;

      default:
        document.getElementById('btn_en').disabled = true;
        document.getElementById('btn_es').disabled = false;
        document.getElementById('btn_fr').disabled = false;
    }
  }

  return (
    <div>
      <Button id="btn_en" className="btnLangChange" onClick={(e) => handleChangeLanguage(e, "en")}>EN</Button>
      <Button id="btn_es" className="btnLangChange" onClick={(e) => handleChangeLanguage(e, "es")}>ES</Button>
      <Button id="btn_fr" className="btnLangChange" onClick={(e) => handleChangeLanguage(e, "fr")}>FR</Button>
    </div>
  )
};

export default LangSwitcher;