/** Homepage FAQs. Rendered as an accordion + emitted as FAQPage JSON-LD. */

export type Faq = { q: string; a: string }

export const HOME_FAQS: Faq[] = [
    {
        q: 'Are you a licensed and insured electrician?',
        a: 'Yes. We hold an A-Grade Electrical Licence (A68377) and are a Registered Electrical Contractor (REC-33712) with Energy Safe Victoria, fully insured. Every job meets Australian standards and comes with a Certificate of Electrical Safety.',
    },
    {
        q: 'Do you offer emergency call-outs?',
        a: 'Yes — 24/7 across South-East Melbourne, including weekends and public holidays. For sparking outlets, a burning smell or total power loss, call 0490 101 365 straight away.',
    },
    {
        q: 'Which suburbs do you service?',
        a: 'We’re based in Cranbourne East and cover the City of Casey, Cardinia Shire, Greater Dandenong, Knox, Monash and Frankston — including Cranbourne, Clyde North, Narre Warren, Berwick, Officer, Pakenham and Dandenong.',
    },
    {
        q: 'Is a quote free? Do you charge a call-out fee?',
        a: 'Quotes are free, with no call-out fee on quoted jobs. You get a clear, upfront price before we start.',
    },
    {
        q: 'Can you install a Tesla or EV charger at home?',
        a: 'Yes — all major brands including Tesla. We check your switchboard, run a dedicated circuit and protect it with a safety switch (RCD).',
    },
    {
        q: 'Do you handle rental and landlord safety compliance?',
        a: 'Yes. We install and test safety switches and smoke alarms, inspect switchboards, and provide the certificates Victorian landlords need.',
    },
]
