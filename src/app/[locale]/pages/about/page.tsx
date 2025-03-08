import React from 'react';
import Header from '@/components/content/header';
import Footer from '@/components/content/footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'This the about page',
    openGraph: {
        title: {
            default: 'About',
            template: '%s | Template App'
        },
        description: 'This the about page',
        url: 'https://example.com/custom-page',
        type: 'website',
    },
};

const About: React.FC = () => {

    const t = useTranslations('About');

    return (
        <>
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
