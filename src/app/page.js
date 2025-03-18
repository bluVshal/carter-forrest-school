"use client";

import { useTranslation } from "react-i18next";
import './i18n';
export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="ml-3 mt-4 max-h-20">
        <h1 className="text-4xl font-CT">{t("welcome")}</h1>
      </div>
    </div>
  );
}
