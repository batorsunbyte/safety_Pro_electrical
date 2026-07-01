/**
 * The core services. Each becomes its own SEO page in Welle 2
 * (/services/<slug>) and feeds the homepage services grid + nav + schema.
 */

export type Service = {
    slug: string
    title: string
    // Short one-liner for cards + nav
    tagline: string
    // Longer intro used at the top of the service page
    intro: string
    // Bullet list of what's included / common jobs
    highlights: string[]
    // Simple inline-SVG icon key (rendered by <ServiceIcon>)
    icon: 'bolt' | 'switchboard' | 'shield' | 'ev' | 'light' | 'rewire'
    // Emergency / featured flags for UI emphasis
    featured?: boolean
    emergency?: boolean
}

export const SERVICES: Service[] = [
    {
        slug: 'emergency-electrician',
        title: 'Emergency Electrician',
        tagline: '24/7 rapid response for power faults & hazards',
        intro:
            'Lost power, sparking outlets or a burning smell? Our licensed emergency electricians respond fast across South-East Melbourne — day, night, weekends and public holidays.',
        highlights: [
            'Power outages & tripping switchboards',
            'Burning smells, sparking or hot power points',
            'Storm & fault damage',
            'Fast same-day and after-hours call-outs',
        ],
        icon: 'bolt',
        featured: true,
        emergency: true,
    },
    {
        slug: 'switchboard-upgrades',
        title: 'Switchboard Upgrades',
        tagline: 'Modern, compliant switchboards & safety switches',
        intro:
            'Old ceramic fuses or a board that keeps tripping? We upgrade switchboards to current AS/NZS 3000 standards with RCD safety switches — safer, and ready for modern appliances and EV chargers.',
        highlights: [
            'Ceramic fuse to circuit-breaker upgrades',
            'RCD safety switch installation',
            'Boards that trip or overload',
            'Certificate of Electrical Safety on completion',
        ],
        icon: 'switchboard',
        featured: true,
    },
    {
        slug: 'safety-switches-smoke-alarms',
        title: 'Safety Switches & Smoke Alarms',
        tagline: 'Protect your family & meet Victorian compliance',
        intro:
            'Safety switches (RCDs) and hard-wired smoke alarms save lives — and are required for compliance. We install, test and certify, including compliance checks for landlords and rentals.',
        highlights: [
            'RCD safety switch installation & testing',
            'Hard-wired & interconnected smoke alarms',
            'Landlord / rental compliance certificates',
            'Switchboard safety inspections',
        ],
        icon: 'shield',
    },
    {
        slug: 'ev-charger-installation',
        title: 'EV Charger Installation',
        tagline: 'Tesla & all brands — safely installed at home',
        intro:
            'Charge at home the right way. We install EV chargers for all brands including Tesla, check your switchboard capacity and protect every install with a dedicated circuit and RCD.',
        highlights: [
            'Tesla & all major EV charger brands',
            'Switchboard capacity checks & upgrades',
            'Dedicated circuit + safety switch protection',
            'Tidy, code-compliant cable runs',
        ],
        icon: 'ev',
        featured: true,
    },
    {
        slug: 'lighting-power-points',
        title: 'Lighting & Power Points',
        tagline: 'Downlights, power points, fans & sensor lights',
        intro:
            'From LED downlights and extra power points to exhaust fans, bathroom heaters and sensor lights — clean, reliable installs that look great and pass inspection.',
        highlights: [
            'LED downlights & feature lighting',
            'Extra power points & USB outlets',
            'Exhaust fans & 4-in-1 bathroom heaters',
            'Outdoor & security sensor lights',
        ],
        icon: 'light',
    },
    {
        slug: 'rewiring-renovations',
        title: 'Rewiring & Renovations',
        tagline: 'New builds, renovations & full home rewires',
        intro:
            'Renovating or dealing with old, unsafe wiring? We handle full and partial rewires, new circuits and complete electrical fit-outs for renovations and new builds — planned, tidy and compliant.',
        highlights: [
            'Full & partial home rewiring',
            'New circuits for appliances & workshops',
            'Renovation & extension electrical fit-outs',
            'New electrical installations',
        ],
        icon: 'rewire',
    },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
