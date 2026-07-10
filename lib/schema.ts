/**
 * JSON-LD structured data builders.
 * Electrician/LocalBusiness schema makes the site eligible for rich results
 * (stars, business info, FAQ) and is heavily cited by AI search engines.
 *
 * Honesty rule: aggregateRating uses Arif's REAL hipages numbers, and the
 * matching reviews are displayed on the site — never fabricated.
 */
import { SITE } from './site'
import { SERVICES } from '@/data/services'
import { SUBURBS, ALSO_SERVICING } from '@/data/suburbs'

const BUSINESS_ID = `${SITE.url}/#business`

export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': BUSINESS_ID,
        name: SITE.name,
        description: SITE.shortPitch,
        url: SITE.url,
        image: `${SITE.url}/opengraph-image.png`,
        logo: `${SITE.url}/logo.png`,
        telephone: SITE.phoneHref.replace('tel:', ''),
        email: SITE.email,
        priceRange: '$$',
        currenciesAccepted: 'AUD',
        founder: { '@type': 'Person', name: SITE.owner },
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE.baseSuburb,
            addressRegion: SITE.state,
            postalCode: SITE.postcode,
            addressCountry: 'AU',
        },
        areaServed: [
            ...SITE.serviceRegions.map((name) => ({ '@type': 'AdministrativeArea', name })),
            ...SUBURBS.map((s) => ({ '@type': 'City', name: `${s.name}, ${SITE.state}` })),
            ...ALSO_SERVICING.map((name) => ({ '@type': 'City', name: `${name}, ${SITE.state}` })),
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '07:00',
                closes: '18:00',
            },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: SITE.rating.value,
            reviewCount: SITE.rating.count,
            bestRating: 5,
            worstRating: 1,
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Electrical Services',
            itemListElement: SERVICES.map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: s.title,
                    description: s.tagline,
                    url: `${SITE.url}/services/${s.slug}/`,
                },
            })),
        },
    }
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.name,
        url: SITE.url,
        inLanguage: 'en-AU',
        publisher: { '@id': BUSINESS_ID },
    }
}

export function serviceSchema(slug: string) {
    const s = SERVICES.find((x) => x.slug === slug)
    if (!s) return null
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.title,
        description: s.intro,
        serviceType: s.title,
        url: `${SITE.url}/services/${s.slug}/`,
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'AdministrativeArea', name: SITE.region },
    }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            item: `${SITE.url}${it.path}`,
        })),
    }
}
