'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
        // Récupérer la langue depuis localStorage ou l'URL
        const savedLanguage = localStorage.getItem('preferredLanguage');
        const currentLocale = window.location.pathname.split('/')[1];
        
        if (savedLanguage && ['fr', 'en'].includes(savedLanguage)) {
            setSelectedLanguage(savedLanguage);
            if (currentLocale !== savedLanguage) {
                const currentPath = window.location.pathname.split('/').slice(2).join('/');
                router.push(`/${savedLanguage}/${currentPath}`);
            }
        } else if (currentLocale && ['fr', 'en'].includes(currentLocale)) {
            setSelectedLanguage(currentLocale);
            localStorage.setItem('preferredLanguage', currentLocale);
        }
    }, [router]);

    const changeLanguage = (locale: string) => {
        setSelectedLanguage(locale);
        localStorage.setItem('preferredLanguage', locale);
        
        // Préserver le chemin actuel
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        router.push(`/${locale}/${currentPath}`);
        
        // Ajouter un petit délai avant le rafraîchissement
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{ background: '#333', color: 'white', border: 'none', borderRadius: '4px' }}
        >
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
};

export default LanguageSwitcher;