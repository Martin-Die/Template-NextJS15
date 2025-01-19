'use client'

import { useState } from 'react';

const Footer = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <footer>
            <p>&copy; 2024 MonSite. Tous droits réservés.</p>
            <div className="social-icons">
                <a href="https://x.com/DieMartin" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
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
                <a href="https://github.com/MartYnX" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://bsky.app/profile/martynx.bsky.social" aria-label="bLUESKY" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-bluesky"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;