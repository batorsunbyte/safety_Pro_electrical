/**
 * Single source of truth for all business + site data.
 * Change a value here and it updates across the whole site
 * (header, footer, schema, contact, meta tags).
 */

export const SITE = {
    name: 'Safety Pro Electrical',
    owner: 'Arif Daryabi',
    // Short value proposition used in hero + meta
    tagline: 'Licensed A-Grade Electricians in South-East Melbourne',
    shortPitch:
        'Prompt, honest, fully licensed electrical work — from emergency call-outs to switchboard upgrades, EV chargers and full rewires. Trusted by hundreds of local homeowners.',

    // ---- Contact ----
    phoneDisplay: '0490 101 365',
    phoneHref: 'tel:+61490101365',
    email: 'safetypro.electrical@gmail.com',
    emailHref: 'mailto:safetypro.electrical@gmail.com',
    whatsappHref: 'https://wa.me/61490101365',

    // ---- Location / service region ----
    baseSuburb: 'Cranbourne East',
    state: 'VIC',
    postcode: '3977',
    region: 'South-East Melbourne',
    // Broad areas covered (for copy + schema areaServed)
    serviceRegions: [
        'City of Casey',
        'Cardinia Shire',
        'Greater Dandenong',
        'Knox',
        'Monash',
        'Frankston',
    ],

    // ---- Credentials (verified trust signals) ----
    abn: '17 682 761 851',
    licences: [
        { label: 'A-Grade Electrical Licence', value: 'A68377', issuer: 'Energy Safe Victoria' },
        { label: 'Registered Electrical Contractor', value: 'REC-33712', issuer: 'Energy Safe Victoria' },
    ],
    fullyInsured: true,
    memberSince: 2022,

    // ---- Reputation (source: hipages — always attribute, never fake Google schema) ----
    rating: {
        value: 4.7,
        count: 37,
        recommendations: 43,
        hires: 68,
        source: 'hipages',
        sourceUrl: 'https://hipages.com.au/connect/safetyproelectrical',
    },

    // ---- Hours ----
    // TODO(Arif): confirm exact opening hours. Emergency line is 24/7.
    hours: 'Mon–Sat, plus 24/7 emergency call-outs',
    emergency247: true,

    // Honest response promise (biased to the reliable CALL path). Reused across CTAs.
    responsePromise: 'We answer fast — most quotes within the hour',

    // ---- Deployment ----
    // TODO: confirm final domain before go-live.
    url: 'https://safetyproelectrical.com.au',
    locale: 'en_AU',

    // Web3Forms access key for the quote form. Empty = form falls back to
    // WhatsApp. Set in Welle 4 so submissions email Arif directly (free, no backend).
    formAccessKey: '',

    // ---- Socials (add when available) ----
    socials: {
        facebook: '',
        instagram: '',
        google: '', // Google Business Profile — to be created (Welle 5)
    },
} as const

// Convenience: primary CTAs reused everywhere
export const CTA = {
    callLabel: `Call ${SITE.phoneDisplay}`,
    quoteLabel: 'Request a Free Quote',
    quoteHref: '/contact/#quote',
}
