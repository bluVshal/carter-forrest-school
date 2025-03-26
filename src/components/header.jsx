"use client";

import React from 'react';
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import LangSwitcher from './langSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import MenuBar from './menu-bar';

const Header = () => {
  const [ t, i18n ] = useTranslation("global");
  
    return (
        <div>
            <h1 className="text-center text-4xl font-CT mb-4 mt-2"> CARTER FORREST SCHOOL </h1>
            <LangSwitcher usedLang={i18n.language}/>
            <MenuBar />
            <SignedOut>
                <p className="ml-4 font-FT">{t('pleaseSignIn')}</p>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <Button className="font-FT" variant="outline">{t('logOut')} <FontAwesomeIcon icon={ faArrowRightFromBracket } /></Button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
};

export default Header;