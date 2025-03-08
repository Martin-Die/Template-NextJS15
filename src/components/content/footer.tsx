'use client'

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {

    const [hovered, setHovered] = useState(false);
    const t = useTranslations('Footer');

    return (
        <footer>
            <p>&copy; {t('copyright')}</p>
            <div className="social-icons">
                <a href="https://fontawesome.com/icons" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                    href="https://fontawesome.com/icons"
                    aria-label="Icon folder"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <i className={hovered ? "fa-solid fa-folder-open" : "fa-solid fa-folder"}></i>
                </a>
                <a href="https://fontawesome.com/icons" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://fontawesome.com/icons" aria-label="bLUESKY" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-bluesky"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;