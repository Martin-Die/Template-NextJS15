'use client'

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HomePage = () => {

    const t = useTranslations('HomePage');

    return (
        <div className="container">
            <Image
                src='/images/image.jpg'
                className="presentation-img"
                width={100} height={100}
                alt="niku"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="hero-text">
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
            </div>
        </div>
    );
};

export default HomePage;