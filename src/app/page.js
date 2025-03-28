"use client";
import { useTranslation } from 'react-i18next';
import Dashboard from '@/components/dashboard/page';

export default function Home() {
  const [ t, i18n ] = useTranslation("global");

  return (
    <div>
      <div className="ml-3 mt-4 max-h-20 font-LS">
        <p>{t('general.welcome')}</p>
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
