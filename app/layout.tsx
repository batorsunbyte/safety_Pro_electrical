import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site'
import { localBusinessSchema, websiteSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import JsonLd from '@/components/JsonLd'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a1220',
}

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.name} | Licensed Electrician ${SITE.region}`,
        template: `%s | ${SITE.name}`,
    },
    description:
        'Licensed A-Grade electricians in South-East Melbourne. Emergencies, switchboards, EV chargers, lighting & rewiring. Fast, honest, 4.7★ rated.',
    keywords: [
        'electrician South-East Melbourne',
        'electrician Cranbourne',
        'emergency electrician Melbourne',
        'switchboard upgrade Melbourne',
        'EV charger installation Melbourne',
        'safety switch installation',
        'licensed electrician Casey',
        'electrician Clyde North',
        'electrician Berwick',
        'electrician Pakenham',
    ],
    authors: [{ name: SITE.name }],
    creator: 'SunByte',
    publisher: SITE.name,
    formatDetection: { telephone: true, email: true, address: true },
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: SITE.locale,
        siteName: SITE.name,
        title: `${SITE.name} | Licensed Electrician ${SITE.region}`,
        description:
            'Fast, honest, fully licensed electrical work across South-East Melbourne. Emergency, switchboards, EV chargers, safety switches, lighting & rewiring.',
        url: SITE.url,
    },
    // twitter: only the card type — title/description fall back to each page's og:* values
    twitter: {
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-AU">
            <body>
                <JsonLd data={localBusinessSchema()} />
                <JsonLd data={websiteSchema()} />
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
                <Footer />
                <MobileCallBar />
            </body>
        </html>
    )
}
