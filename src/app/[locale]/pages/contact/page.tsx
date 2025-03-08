'use client'

import Header from "@/components/content/header";
import Footer from "@/components/content/footer";
import { useTranslations } from 'next-intl';

const Contact = () => {

    const t = useTranslations('Contact');

    return (
        <>
            <Header />
            <main className="container">
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">{t('name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t('name_placeholder')}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t('mail')}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t('mail_placeholder')}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t('message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder={t('message_placeholder')}
                            required
                        ></textarea>
                    </div>

                    <button type="submit">{t('send')}</button>
                </form>
            </main>
            <Footer />
        </>
    );
};


export default Contact;
