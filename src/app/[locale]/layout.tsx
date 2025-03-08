import "../globals.scss";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata = {
  title: "Template",
  description: "A full minimalist template you can use for anything",
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
        url: '/icons/carrd.svg',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
        url: '/icons/carrd.svg'
      }
    ]
  },
};

type Locale = typeof routing.locales[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  };

  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}