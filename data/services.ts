/**
 * The core services. Each becomes its own SEO page in Welle 2
 * (/services/<slug>) and feeds the homepage services grid + nav + schema.
 */
import type { Faq } from './faqs'

export type Service = {
    slug: string
    title: string
    // Short one-liner for cards + nav
    tagline: string
    // Longer intro used at the top of the service page
    intro: string
    // Bullet list of what's included / common jobs
    highlights: string[]
    // Short reassurance paragraph (why choose us for THIS service)
    reassurance: string
    // Simple inline-SVG icon key (rendered by <ServiceIcon>)
    icon: 'bolt' | 'switchboard' | 'shield' | 'ev' | 'light' | 'rewire'
    // Illustrative photo (licensed stock placeholders — swap for Arif's real job photos)
    image: string
    imageAlt: string
    // Emergency / featured flags for UI emphasis
    featured?: boolean
    emergency?: boolean
    // Per-service FAQs (rendered + emitted as FAQPage schema)
    faqs: Faq[]
}

export const SERVICES: Service[] = [
    {
        slug: 'emergency-electrician',
        title: 'Emergency Electrician',
        tagline: '24/7 rapid response for power faults & hazards',
        intro:
            'Lost power, sparking outlets or a burning smell? We respond fast across South-East Melbourne — day or night.',
        highlights: [
            'Power outages & tripping switchboards',
            'Burning smells, sparking or hot power points',
            'Storm & fault damage repairs',
            'Fast same-day and after-hours call-outs',
        ],
        reassurance:
            'Don’t wait — electrical faults are dangerous. We make it safe first, then give you an upfront price before any repair.',
        icon: 'bolt',
        image: '/images/multimeter-test.webp',
        imageAlt: 'Electrician testing an electrical panel with a multimeter',
        featured: true,
        emergency: true,
        faqs: [
            {
                q: 'Do you really answer 24/7?',
                a: 'Yes. We take emergency calls day and night, including weekends and public holidays. Call 0490 101 365 and we’ll prioritise you.',
            },
            {
                q: 'What counts as an electrical emergency?',
                a: 'Burning smells, sparks, smoke, hot power points, exposed wiring, or power loss that won’t reset. If in doubt, switch off at the main and call us.',
            },
            {
                q: 'Should I try to fix it myself first?',
                a: 'No. In Victoria, electrical work must be done by a licensed electrician. Turn the power off at the switchboard if safe, keep clear, and call us.',
            },
        ],
    },
    {
        slug: 'switchboard-upgrades',
        title: 'Switchboard Upgrades',
        tagline: 'Modern, compliant switchboards & safety switches',
        intro:
            'Old ceramic fuses or a board that keeps tripping? We fit modern switchboards with safety switches (RCDs), compliant with Australian standards.',
        highlights: [
            'Ceramic fuse to circuit-breaker upgrades',
            'RCD safety switch installation',
            'Boards that trip or overload',
            'Certificate of Electrical Safety on completion',
        ],
        reassurance:
            'Your switchboard is the heart of a safe home. We size it for today and leave room for solar or an EV charger later.',
        icon: 'switchboard',
        image: '/images/switchboard-work.webp',
        imageAlt: 'Electrician working on a circuit breaker switchboard',
        featured: true,
        faqs: [
            {
                q: 'How do I know if my switchboard needs upgrading?',
                a: 'Common signs: ceramic fuses, no safety switches (RCDs), frequent tripping, flickering lights, or a full board. We’ll inspect it and give you honest advice.',
            },
            {
                q: 'How long does a switchboard upgrade take?',
                a: 'Most home upgrades take a day. You get the cost upfront and a Certificate of Electrical Safety when it’s done.',
            },
            {
                q: 'Will my power be off during the upgrade?',
                a: 'Only for part of the job. We plan it to keep disruption low and tell you what to expect beforehand.',
            },
        ],
    },
    {
        slug: 'safety-switches-smoke-alarms',
        title: 'Safety Switches & Smoke Alarms',
        tagline: 'Protect your family & meet Victorian compliance',
        intro:
            'Safety switches (RCDs) and hard-wired smoke alarms save lives. We install, test and certify — including rental compliance for landlords.',
        highlights: [
            'RCD safety switch installation & testing',
            'Hard-wired & interconnected smoke alarms',
            'Landlord / rental compliance certificates',
            'Switchboard safety inspections',
        ],
        reassurance:
            'A safety switch cuts power in milliseconds to stop electric shock. Working smoke alarms give your family time to get out.',
        icon: 'shield',
        image: '/images/safety-board.webp',
        imageAlt: 'Modern switchboard with safety switches on a white wall',
        faqs: [
            {
                q: 'How often should safety switches be tested?',
                a: 'Press the test button every three months. We can test and certify yours during any visit.',
            },
            {
                q: 'What are the smoke alarm rules for Victorian rentals?',
                a: 'Victorian rentals must have working, tested smoke alarms. We install compliant hard-wired alarms and provide the certificates landlords need.',
            },
            {
                q: 'Do you provide compliance certificates?',
                a: 'Yes. You get a Certificate of Electrical Safety for our work, plus compliance paperwork for landlords and property managers.',
            },
        ],
    },
    {
        slug: 'ev-charger-installation',
        title: 'EV Charger Installation',
        tagline: 'Tesla & all brands — safely installed at home',
        intro:
            'Charge at home the right way. We install all brands including Tesla, on a dedicated, protected circuit.',
        highlights: [
            'Tesla & all major EV charger brands',
            'Switchboard capacity checks & upgrades',
            'Dedicated circuit + safety switch protection',
            'Tidy, code-compliant cable runs',
        ],
        reassurance:
            'An EV charger needs its own protected circuit — not a shared power point. We do it properly so your car charges safely every night.',
        icon: 'ev',
        image: '/images/ev-tesla.webp',
        imageAlt: 'Tesla electric vehicle charging at a wall-mounted home charger',
        featured: true,
        faqs: [
            {
                q: 'Can you install a Tesla Wall Connector?',
                a: 'Yes. We install Tesla Wall Connectors and all major brands, on a dedicated, protected circuit.',
            },
            {
                q: 'Do I need to upgrade my switchboard for an EV charger?',
                a: 'Sometimes. Older or full switchboards may need an upgrade first. We’ll check and let you know before we start.',
            },
            {
                q: 'How long does an EV charger install take?',
                a: 'Most home installs take a few hours. If a switchboard upgrade or long cable run is needed, it goes into your upfront quote.',
            },
        ],
    },
    {
        slug: 'lighting-power-points',
        title: 'Lighting & Power Points',
        tagline: 'Downlights, power points, fans & sensor lights',
        intro:
            'LED downlights, extra power points, exhaust fans, bathroom heaters and sensor lights. Clean, reliable installs that look great.',
        highlights: [
            'LED downlights & feature lighting',
            'Extra power points & USB outlets',
            'Exhaust fans & 4-in-1 bathroom heaters',
            'Outdoor & security sensor lights',
        ],
        reassurance:
            'Little jobs matter too. A single power point gets the same care as a full rewire — tidy finish, no mess left behind.',
        icon: 'light',
        image: '/images/downlights.webp',
        imageAlt: 'Modern ceiling downlights in a contemporary interior',
        faqs: [
            {
                q: 'Can you swap my old halogen downlights to LED?',
                a: 'Yes. LED downlights cut your power bill, run cooler and last far longer. We’ll recommend the right light colour for each room.',
            },
            {
                q: 'Can you add power points where I need them?',
                a: 'Yes — kitchens, home offices, outdoor areas, garages and more. We place them neatly and check the circuit can handle the load.',
            },
            {
                q: 'Do you install bathroom exhaust fans and heaters?',
                a: 'We do — including 4-in-1 units with light, heat, fan and exhaust. Good ventilation stops mould and damp.',
            },
        ],
    },
    {
        slug: 'rewiring-renovations',
        title: 'Rewiring & Renovations',
        tagline: 'New builds, renovations & full home rewires',
        intro:
            'Renovating, or worried about old wiring? We handle full and partial rewires, new circuits and complete fit-outs for renovations and new builds.',
        highlights: [
            'Full & partial home rewiring',
            'New circuits for appliances & workshops',
            'Renovation & extension electrical fit-outs',
            'New electrical installations',
        ],
        reassurance:
            'Old wiring is a leading cause of house fires. We plan the rewire around your renovation — safe, and built to last.',
        icon: 'rewire',
        image: '/images/home-cabling.webp',
        imageAlt: 'Electrical cabling being installed in a home',
        faqs: [
            {
                q: 'How do I know if my house needs rewiring?',
                a: 'Watch for cloth-covered wiring, blown fuses, flickering lights or discoloured outlets. Homes over 30–40 years old often need a check. We can assess and advise.',
            },
            {
                q: 'Can you work alongside my builder or renovation?',
                a: 'Yes. We regularly work with builders and homeowners, planning circuits, lighting and power around your layout and timeline.',
            },
            {
                q: 'Is a full rewire disruptive?',
                a: 'Some, but we stage the work and keep essential power on where possible. You get a clear plan and timeline first.',
            },
        ],
    },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
