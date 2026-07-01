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
        'Licensed A-Grade electricians serving South-East Melbourne. Emergency call-outs, switchboard upgrades, EV chargers, safety switches, lighting & rewiring. Fast, honest, fully insured — 4.7★ rated.',
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
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: '32x32' },
        ],
        apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    },
    openGraph: {
        type: 'website',
        locale: SITE.locale,
        siteName: SITE.name,
        title: `${SITE.name} | Licensed Electrician ${SITE.region}`,
        description:
            'Fast, honest, fully licensed electrical work across South-East Melbourne. Emergency, switchboards, EV chargers, safety switches, lighting & rewiring.',
        url: SITE.url,
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE.name} | Licensed Electrician ${SITE.region}`,
        description: 'Licensed A-Grade electricians serving South-East Melbourne. 4.7★ rated.',
        images: ['/og-image.png'],
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
                <Header />
                <main className="pb-20 lg:pb-0">{children}</main>
                <Footer />
                <MobileCallBar />
            </body>
        </html>
    )
}
