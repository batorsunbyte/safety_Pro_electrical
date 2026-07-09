/**
 * Service-area suburbs. The 8 priority suburbs get their own SEO landing
 * page in Welle 3 (/service-areas/<slug>). Derived from Arif's real job
 * locations (hipages reviews) — highest-intent, closest to base.
 */

export type Suburb = {
    slug: string
    name: string
    // Council / broader area for local context in copy
    council: string
    // A genuine, area-specific angle (housing stock, common jobs) — NOT swap-copy
    localAngle: string
    priority: boolean
}

export const SUBURBS: Suburb[] = [
    {
        slug: 'cranbourne-east',
        name: 'Cranbourne East',
        council: 'City of Casey',
        localAngle:
            'Our home base. In the new estates around Cranbourne East we mostly install EV chargers, extra power points and downlights in modern family homes.',
        priority: true,
    },
    {
        slug: 'cranbourne',
        name: 'Cranbourne',
        council: 'City of Casey',
        localAngle:
            'Cranbourne mixes established homes and newer builds. We do everything here — switchboard upgrades on older properties, safety-switch compliance and rewires.',
        priority: true,
    },
    {
        slug: 'clyde-north',
        name: 'Clyde North',
        council: 'City of Casey',
        localAngle:
            'One of Melbourne’s fastest-growing suburbs. New-build owners call us for EV chargers, extra circuits, downlights and outdoor lighting.',
        priority: true,
    },
    {
        slug: 'narre-warren',
        name: 'Narre Warren',
        council: 'City of Casey',
        localAngle:
            'Narre Warren and Narre Warren South are full of established family homes. Common jobs: switchboard upgrades, ceiling fans, lighting and extra power points.',
        priority: true,
    },
    {
        slug: 'berwick',
        name: 'Berwick',
        council: 'City of Casey',
        localAngle:
            'Berwick runs from heritage streets to new estates. We handle renovations, rewires, safety upgrades and quality lighting installs across all of it.',
        priority: true,
    },
    {
        slug: 'officer',
        name: 'Officer',
        council: 'Cardinia Shire',
        localAngle:
            'Officer is a growth corridor full of new families. Our most-requested jobs here: EV chargers, safety switches and lighting for modern homes.',
        priority: true,
    },
    {
        slug: 'pakenham',
        name: 'Pakenham',
        council: 'Cardinia Shire',
        localAngle:
            'We cover older Pakenham homes and the new estates alike. Switchboard upgrades, compliance work and renovation fit-outs are our common jobs here.',
        priority: true,
    },
    {
        slug: 'dandenong',
        name: 'Dandenong',
        council: 'Greater Dandenong',
        localAngle:
            'Homes and small businesses across Dandenong rely on us for repairs, switchboard upgrades, smoke alarms and safety-switch compliance.',
        priority: true,
    },
]

// Additional suburbs we service (shown as a list; pages can be added later)
export const ALSO_SERVICING: string[] = [
    'Clyde',
    'Narre Warren South',
    'Endeavour Hills',
    'Hallam',
    'Noble Park',
    'Keysborough',
    'Frankston',
    'Langwarrin',
    'Skye',
    'Ferntree Gully',
    'Boronia',
    'Wantirna',
    'Scoresby',
    'Mount Waverley',
    'Glen Waverley',
    'Clayton',
]

export const PRIORITY_SUBURBS = SUBURBS.filter((s) => s.priority)
export const getSuburb = (slug: string) => SUBURBS.find((s) => s.slug === slug)
