/** Homepage FAQs. Rendered as an accordion + emitted as FAQPage JSON-LD. */

export type Faq = { q: string; a: string }

export const HOME_FAQS: Faq[] = [
    {
        q: 'Are you a licensed and insured electrician?',
        a: 'Yes. Safety Pro Electrical holds an A-Grade Electrical Licence (A68377) and is a Registered Electrical Contractor (REC-33712) with Energy Safe Victoria, and we are fully insured. Every job is completed to AS/NZS 3000 standards and comes with a Certificate of Electrical Safety.',
    },
    {
        q: 'Do you offer emergency call-outs?',
        a: 'Yes — we provide 24/7 emergency electrical call-outs across South-East Melbourne, including weekends and public holidays. If you have sparking outlets, a burning smell or a total power loss, call us straight away on 0490 101 365.',
    },
    {
        q: 'Which suburbs do you service?',
        a: 'We’re based in Cranbourne East and service the City of Casey, Cardinia Shire, Greater Dandenong, Knox, Monash and Frankston — including Cranbourne, Clyde North, Narre Warren, Berwick, Officer, Pakenham, Dandenong and surrounding suburbs.',
    },
    {
        q: 'Is a quote free? Do you charge a call-out fee?',
        a: 'Quotes are free and there’s no call-out fee on quoted jobs. We’ll assess the work, explain your options clearly and give you an upfront price before starting.',
    },
    {
        q: 'Can you install a Tesla or EV charger at home?',
        a: 'Absolutely. We install EV chargers for all major brands including Tesla. We check your switchboard has the capacity, run a dedicated circuit and protect the install with a safety switch (RCD) so it’s safe and compliant.',
    },
    {
        q: 'Do you handle rental and landlord safety compliance?',
        a: 'Yes. We install and test safety switches and hard-wired smoke alarms, carry out switchboard safety inspections, and provide the compliance certificates landlords need for Victorian rental properties.',
    },
]
