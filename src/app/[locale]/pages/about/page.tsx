import React from 'react';
import Header from '@/components/content/header';
import Footer from '@/components/content/footer';
import Image from 'next/image';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {

    const t = useTranslations('About');

    return (
        <>
            <Head>
                <meta property="og:title" content="Titre personnalisé de la page" />
                <meta property="og:description" content="Description personnalisée de la page" />
                <meta property="og:image" content="/images/custom-og-image.jpg" />
                <meta property="og:url" content="https://example.com/custom-page" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Titre personnalisé de la page" />
                <meta name="twitter:description" content="Description personnalisée de la page" />
                <meta name="twitter:image" content="/images/custom-og-image.jpg" />

                <meta name="description" content="Description personnalisée de la page" />
            </Head>
            <Header />
            <main className="container about-page">
                <section className="hero">
                    <h1>{t('title')}</h1>
                    <Image
                        src="/images/image.jpg"
                        alt="Votre image de profile"
                        width={200}
                        height={200}
                        className="profile-image"
                    />
                    <p className="intro">{t('description')}</p>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default About;
