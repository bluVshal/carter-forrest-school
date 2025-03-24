"use client";

import React from 'react';
import { SignedIn, SignInButton, SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import LangSwitcher from './langSwitcher';

import { useTranslation } from 'react-i18next';
const Header = () => {
  const [ t, i18n ] = useTranslation("global");
    return (
        <div>
            <LangSwitcher />
            <h1 className="text-center text-4xl font-CT mb-4 mt-2"> CARTER FORREST SCHOOL </h1>
            <SignedOut>
                <p>{t('pleaseSignIn')}</p>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <Button className="font-FT" variant="outline">Log Out</Button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
};

export default Header;