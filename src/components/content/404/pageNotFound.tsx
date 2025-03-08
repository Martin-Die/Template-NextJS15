'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import './pageNotFound.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import Image from 'next/image';

const PageNotFound = () => {

  const t = useTranslations('NotFoundPage');

  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // Retour à la page précédente dans l'historique
  };

  return (
    <div className="page-not-found">
      <h1>{t('title')}</h1>
      <Image
        src="/images/image.jpg"
        alt="Image not found"
        width={250}
        height={250}
        style={{ marginBottom: '30px' }}
      />
      <p>{t('description')}</p>
      <div className="button-container">
        <a onClick={handleGoBack}>{t('button-go-back')}</a>
        <Link href='/'>{t('button-go-home')}</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
