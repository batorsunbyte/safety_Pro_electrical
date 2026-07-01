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
            'Lost power, sparking outlets or a burning smell? Our licensed emergency electricians respond fast across South-East Melbourne — day, night, weekends and public holidays.',
        highlights: [
            'Power outages & tripping switchboards',
            'Burning smells, sparking or hot power points',
            'Storm & fault damage repairs',
            'Fast same-day and after-hours call-outs',
        ],
        reassurance:
            'Electrical faults can be dangerous — don’t wait. We’ll make it safe first, explain what’s going on in plain English, and give you an upfront price before any repair.',
        icon: 'bolt',
        featured: true,
        emergency: true,
        faqs: [
            {
                q: 'Do you really answer 24/7?',
                a: 'Yes. For genuine electrical emergencies we take calls day and night, including weekends and public holidays. Call 0490 101 365 and we’ll prioritise getting to you.',
            },
            {
                q: 'What counts as an electrical emergency?',
                a: 'A burning smell, sparks, smoke, hot or discoloured power points, exposed wiring, or a complete loss of power — especially if it won’t reset. If in doubt, switch off at the main and call us.',
            },
            {
                q: 'Should I try to fix it myself first?',
                a: 'No. In Victoria, electrical work must be done by a licensed electrician. Turn off power at the switchboard if it’s safe to do so, keep clear, and let us handle it safely.',
            },
        ],
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
        reassurance:
            'A modern switchboard is the heart of a safe home. We size it correctly for your needs today and leave room for what’s next — solar, air-con or an EV charger down the track.',
        icon: 'switchboard',
        featured: true,
        faqs: [
            {
                q: 'How do I know if my switchboard needs upgrading?',
                a: 'Common signs are ceramic fuses, no safety switches (RCDs), frequent tripping, flickering lights, or a board that’s full with no room for new circuits. We’ll inspect it and give you honest advice.',
            },
            {
                q: 'How long does a switchboard upgrade take?',
                a: 'Most residential upgrades are completed within a day. We’ll confirm timing and cost upfront, and you’ll receive a Certificate of Electrical Safety when it’s done.',
            },
            {
                q: 'Will my power be off during the upgrade?',
                a: 'Power is off for part of the job while we work safely on the board. We plan it to keep disruption to a minimum and let you know what to expect beforehand.',
            },
        ],
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
        reassurance:
            'A safety switch cuts power in milliseconds to prevent electric shock, and working smoke alarms give your family time to get out. We make sure both are installed and working correctly.',
        icon: 'shield',
        faqs: [
            {
                q: 'How often should safety switches be tested?',
                a: 'We recommend testing safety switches every three months using the test button, and having them professionally checked periodically. We can test and certify yours during any visit.',
            },
            {
                q: 'What are the smoke alarm rules for Victorian rentals?',
                a: 'Rental properties must have working smoke alarms installed and tested according to Victorian regulations. We install compliant hard-wired alarms and provide the certificates landlords need.',
            },
            {
                q: 'Do you provide compliance certificates?',
                a: 'Yes. We provide a Certificate of Electrical Safety for the work we do, plus safety-switch and smoke-alarm compliance documentation for landlords and property managers.',
            },
        ],
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
        reassurance:
            'An EV charger draws serious current, so it needs its own protected circuit — not a shared power point. We do it properly so your car charges safely, quickly and reliably.',
        icon: 'ev',
        featured: true,
        faqs: [
            {
                q: 'Can you install a Tesla Wall Connector?',
                a: 'Yes. We install Tesla Wall Connectors and all major EV charger brands, including checking your switchboard has capacity and running a dedicated, protected circuit.',
            },
            {
                q: 'Do I need to upgrade my switchboard for an EV charger?',
                a: 'Sometimes. If your switchboard is older or already near capacity, an upgrade may be needed to add a dedicated circuit safely. We’ll check and let you know before we start.',
            },
            {
                q: 'How long does an EV charger install take?',
                a: 'A straightforward home install is usually done in a few hours. If a switchboard upgrade or a longer cable run is involved, we’ll factor that into your upfront quote.',
            },
        ],
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
        reassurance:
            'The little jobs matter too. We take the same care with a single power point as we do a full rewire — neat placement, tidy finish and no mess left behind.',
        icon: 'light',
        faqs: [
            {
                q: 'Can you swap my old halogen downlights to LED?',
                a: 'Absolutely. Switching to LED downlights cuts your power bill, runs cooler and lasts far longer. We can replace fittings and recommend the right colour temperature for each room.',
            },
            {
                q: 'Can you add power points where I need them?',
                a: 'Yes — kitchens, home offices, outdoor areas, garages and more. We’ll place them neatly and make sure the circuit can handle the extra load.',
            },
            {
                q: 'Do you install bathroom exhaust fans and heaters?',
                a: 'We do — including 4-in-1 units with light, heat, fan and exhaust. Proper ventilation protects your bathroom from mould and damp.',
            },
        ],
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
        reassurance:
            'Old wiring is one of the most common causes of house fires. We plan rewires carefully around your renovation so it’s safe, future-proof and finished to a high standard.',
        icon: 'rewire',
        faqs: [
            {
                q: 'How do I know if my house needs rewiring?',
                a: 'Warning signs include cloth or rubber-insulated wiring, frequent blown fuses, flickering lights, discoloured outlets, or a home over 30–40 years old that’s never been updated. We can assess and advise.',
            },
            {
                q: 'Can you work alongside my builder or renovation?',
                a: 'Yes. We regularly coordinate with builders and homeowners on renovations and extensions, planning circuits, lighting and power around your layout and timeline.',
            },
            {
                q: 'Is a full rewire disruptive?',
                a: 'There’s some disruption, but we plan the work in stages to minimise it and keep essential power on where possible. We’ll walk you through the plan and give a clear timeline.',
            },
        ],
    },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
