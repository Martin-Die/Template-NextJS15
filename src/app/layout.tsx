import './globals.scss';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    colorScheme: 'light dark'
};

export const metadata: Metadata = {
    metadataBase: new URL('https://your-domain.com'),
    title: {
        default: 'Template App - A Modern Next.js App',
        template: '%s | Template App'
    },
    description: 'A modern application built with Next.js',
    applicationName: 'Template App',
    authors: [{ name: 'Your Name', url: 'https://your-website.com' }],
    generator: 'Next.js',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Template', 'Web Development'],
    referrer: 'origin-when-cross-origin',
    category: 'technology',

    // OpenGraph metadata
    openGraph: {
        type: 'website',
        siteName: 'Template App',
        title: 'Template App - A Modern Next.js App',
        description: 'A modern application built with Next.js, delivering an exceptional user experience',
        url: 'https://your-domain.com',
        images: [
            {
                url: 'https://template-next-js-15.vercel.app/images/image.jpg',
                width: 1200,
                height: 630,
                alt: 'Template App Preview',
                type: 'image/jpeg',
            },
            {
                url: 'https://template-next-js-15.vercel.app/images/image.jpg',
                width: 600,
                height: 600,
                alt: 'Template App Preview Square',
                type: 'image/jpeg',
            }
        ],
        locale: 'fr_FR',
        countryName: 'France',
    },

    // Twitter metadata
    twitter: {
        card: 'summary_large_image',
        site: '@youraccount',
        creator: '@youraccount',
        title: 'Template App - A Modern Next.js App',
        description: 'A modern application built with Next.js, delivering an exceptional user experience',
        images: [{
            url: 'https://template-next-js-15.vercel.app/images/image.jpg',
            alt: 'Template App Preview',
            width: 1200,
            height: 600,
            type: 'image/jpeg',
        }],
    },

    // Autres métadonnées sociales
    other: {
        'msapplication-TileColor': '#ffffff',
        'msapplication-config': '/browserconfig.xml',
        'pinterest-rich-pin': 'true',

        // LinkedIn - Informations de base
        'linkedin:card': 'summary_large_image',
        'linkedin:title': 'Template App - Une Application Next.js Moderne',
        'linkedin:description': 'Une application moderne construite avec Next.js, offrant une expérience utilisateur exceptionnelle',
        'linkedin:image': '/images/linkedin-image.jpg',

        // LinkedIn - Informations professionnelles
        'linkedin:author': 'https://www.linkedin.com/in/votre-profil',
        'linkedin:company': 'https://www.linkedin.com/company/votre-entreprise',
        'linkedin:industry': 'Technology',

        // Article et auteur
        'article:author': 'https://your-website.com/about',
        'article:publisher': 'https://your-website.com',
        'article:published_time': new Date().toISOString(),
        'article:modified_time': new Date().toISOString(),
        'article:section': 'Technology',
        'article:tag': 'Next.js, React, Web Development',

        // Informations professionnelles supplémentaires
        'business:contact_data:street_address': 'Your adress',
        'business:contact_data:locality': 'Your city',
        'business:contact_data:postal_code': 'postal code',
        'business:contact_data:country_name': 'Your country',
        'business:contact_data:email': 'contact@your-domain.com',
        'business:contact_data:phone_number': '+33123456789',
        'business:contact_data:website': 'https://your-domain.com',
    },

    verification: {
        google: 'your-google-site-verification',
        yandex: 'your-yandex-verification',
        other: {
            'msvalidate.01': 'your-bing-verification',
        },
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Template App',
        startupImage: [
            {
                url: '/splash/apple-splash-2048-2732.jpg',
                media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
            },
            {
                url: '/splash/apple-splash-1668-2388.jpg',
                media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
            },
            {
                url: '/splash/apple-splash-1536-2048.jpg',
                media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
            },
        ],
    },
    icons: {
        icon: [
            { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icons/favicon.ico', sizes: '48x48' },
        ],
        shortcut: ['/shortcut-icon.png'],
        apple: [
            { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/icons/safari-pinned-tab.svg',
                color: '#000000',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}