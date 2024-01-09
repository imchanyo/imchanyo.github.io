import '~/styles/globals.css';

import type { Metadata } from 'next';

import FloatScrollTopButton from '~/components/float-scroll-top-button';
import GoogleAnalytics from '~/components/google-analytics';
import siteConfig from '~/libs/site-config';
import Header from '~/components/header';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: {
        template: '%s | chanyoung',
        default: 'chanyoung.me',
    },
    description: 'Develop about something Soft and Simple.',
    openGraph: {
        images: [
            'https://user-images.githubusercontent.com/65283190/262039301-7ca908de-e523-478e-b0af-b70665dd7703.jpg',
        ],
        locale: 'ko_KR',
    },
    icons: {
        shortcut: '/favicon.ico',
        icon :  '/favicon.ico'
    },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>
                <Providers>
                    <Header />
                    <div className="container mx-auto max-w-page py-page min-h-screen">
                        <main className="max-w-screen-md flex flex-col px-10 m-auto">{children}</main>
                        <FloatScrollTopButton />
                    </div>
                </Providers>
            </body>
            {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
        </html>
    );
}
