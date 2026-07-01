/**
 * Real customer reviews — sourced from Arif's hipages profile (4.7★, 37 ratings).
 * Always attributed to hipages. We display genuine testimonials; we do NOT
 * fabricate ratings or add self-serving Review schema on our own domain.
 * Curated for substance + a spread of services and suburbs.
 */

export type Review = {
    name: string
    suburb: string
    date: string
    service: string
    text: string
    /** Optional job photo path (e.g. '/gallery/switchboard.jpg') — drops in when Arif supplies photos. */
    image?: string
}

export const REVIEWS: Review[] = [
    {
        name: 'Enosh',
        suburb: 'Scoresby',
        date: 'Aug 2024',
        service: 'EV Charger Installation',
        text: 'Arif contacted me within a minute and gave a very reasonable quote. He did a thorough check of the meter board and circuit to make sure it was compliant, then installed my Tesla EV charger perfectly. He was so good I also had him install two bathroom exhaust fans and heaters. Highly recommend!',
    },
    {
        name: 'Kaiit M',
        suburb: 'Dandenong North',
        date: 'Apr 2023',
        service: 'Rewiring & New Circuit',
        text: 'Arif and his team are fantastic — clean, honest and efficient. A few tradies quoted our workshop rewire, but Arif was the only one who suggested a new 20amp circuit breaker, which after my own research was the safest option for larger tools. Would happily recommend and will have him back.',
    },
    {
        name: 'Antoinette',
        suburb: 'Hallam',
        date: 'Jan 2023',
        service: 'Switchboard & Repairs',
        text: 'Absolutely outstanding service. We had a range of electrical issues and Arif was amazing. His pricing was transparent and fair, and all work was done professionally and respectfully. Extremely trustworthy — I highly recommend.',
    },
    {
        name: 'Nishanth',
        suburb: 'Lyndhurst',
        date: 'Feb 2026',
        service: 'Power Points',
        text: 'Punctual, no call-out fee. Inspected the job and gave a quote on the spot, then started right away once I was happy. Work was professionally done and they were available over the weekend. Will definitely recommend.',
    },
    {
        name: 'Alisha P',
        suburb: 'Clyde North',
        date: 'Jan 2024',
        service: 'Emergency Call-out',
        text: 'Arif was prompt, polite and extremely helpful — on a public holiday no less. I wouldn’t hesitate to hire him in the future or recommend him to anyone.',
    },
    {
        name: 'Phil',
        suburb: 'Frankston',
        date: 'Jun 2023',
        service: 'Electrical Repairs',
        text: 'Great work. Came on a Sunday, very thorough and explained everything he was doing. Will hire again.',
    },
    {
        name: 'Mary M',
        suburb: 'Cranbourne',
        date: 'Mar 2023',
        service: 'Rewiring',
        text: 'I would recommend Arif from Safety Pro Electrical. He is knowledgeable, thorough in his work and a fantastic communicator. He did a great job and I’m very happy — I would definitely hire him again.',
    },
    {
        name: 'Mariah C',
        suburb: 'Noble Park',
        date: 'Nov 2022',
        service: 'Power Points',
        text: 'Arif was very mindful of my budget and explained everything clearly. He and Sina were methodical and made sure everything was safe with minimal damage. Really happy — will definitely call them back.',
    },
    {
        name: 'Ali',
        suburb: 'Dandenong',
        date: 'Oct 2022',
        service: 'Smoke Alarms & Sensor Lights',
        text: 'So happy I found Arif Daryabi from Safety Pro Electrical. He checked and tested the smoke detector and porch sensor light with great workmanship. I’ll definitely call him for future electrical jobs.',
    },
    {
        name: 'Sean I',
        suburb: 'Cranbourne East',
        date: 'Oct 2022',
        service: 'Power Points',
        text: 'Thorough and knew exactly what he was doing. Got the job done and fixed quickly. Very happy with the result.',
    },
    {
        name: 'Andrew R',
        suburb: 'Narre Warren North',
        date: 'Oct 2022',
        service: 'New Installations',
        text: 'Arif was extremely professional and quick to complete my job. He explained what he needed to do and recommended the correct solution.',
    },
    {
        name: 'Jamie',
        suburb: 'Narre Warren South',
        date: 'Jan 2024',
        service: 'Electrical Repairs',
        text: 'Great worker — trustworthy and honest. Will use again.',
    },
    {
        name: 'Rinkesh',
        suburb: 'Officer',
        date: 'Oct 2023',
        service: 'Electrical Service',
        text: 'Very good quote and nice, professional service provider. Looking forward to using them again in the future.',
    },
    {
        name: 'Cherish H',
        suburb: 'Wantirna South',
        date: 'Mar 2024',
        service: 'Electrical Lighting',
        text: 'Very professional, great attention to detail, good price with good service all round.',
    },
]

/**
 * Reviews from (or near) a given suburb, for suburb landing pages.
 * Matches loosely so "Narre Warren" also surfaces "Narre Warren South/North".
 */
export function reviewsForSuburb(suburbName: string): Review[] {
    const n = suburbName.toLowerCase()
    return REVIEWS.filter((r) => {
        const s = r.suburb.toLowerCase()
        return s.includes(n) || n.includes(s)
    })
}

// Which review `service` labels prove which service page (matched case-insensitively).
// Keyword ORDER = relevance: earlier keywords rank their matches first.
const SERVICE_KEYWORDS: Record<string, string[]> = {
    'emergency-electrician': ['emergency', 'repairs'],
    'switchboard-upgrades': ['switchboard', 'circuit'],
    'safety-switches-smoke-alarms': ['smoke', 'sensor'],
    'ev-charger-installation': ['ev charger'],
    'lighting-power-points': ['lighting', 'power points'],
    'rewiring-renovations': ['rewiring', 'installations', 'circuit'],
}

/**
 * Reviews that match a service page (by slug), ranked by keyword priority
 * and topped up with general reviews so callers always get `count` items.
 * `matchedCount` tells the caller how many are genuine matches (e.g. to
 * soften an "about this work" heading when padding was needed).
 */
export function reviewsForService(
    slug: string,
    count = 3,
): { reviews: Review[]; matchedCount: number } {
    const keywords = SERVICE_KEYWORDS[slug] ?? []
    const rank = (r: Review) =>
        keywords.findIndex((k) => r.service.toLowerCase().includes(k))
    const matches = REVIEWS.filter((r) => rank(r) !== -1).sort((a, b) => rank(a) - rank(b))
    const rest = REVIEWS.filter((r) => rank(r) === -1)
    return {
        reviews: [...matches, ...rest].slice(0, count),
        matchedCount: Math.min(matches.length, count),
    }
}
