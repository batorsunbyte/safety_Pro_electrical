import { SITE } from '@/lib/site'

const REASONS = [
    {
        title: 'Fully Licensed & Certified',
        body: 'A-Grade licensed (A68377) and registered (REC-33712). Every job meets AS/NZS 3000 and comes with a Certificate of Electrical Safety.',
        icon: 'shield',
    },
    {
        title: 'Upfront, Honest Pricing',
        body: 'Free quotes and no call-out fee on quoted jobs. You get a clear price before we start — no surprises, no pressure.',
        icon: 'tag',
    },
    {
        title: 'Fast Local Response',
        body: `Based in ${SITE.baseSuburb}, we respond quickly across South-East Melbourne — often same-day, with 24/7 emergency call-outs.`,
        icon: 'clock',
    },
    {
        title: 'Clean, Quality Workmanship',
        body: 'Hundreds of local homeowners rate us 4.7★. We turn up on time, do it properly, and tidy up after ourselves.',
        icon: 'star',
    },
] as const

export default function WhyUs() {
    return (
        <section id="why" className="section scroll-mt-24 bg-white">
            <div className="container-x">
                <div className="max-w-2xl">
                    <span className="eyebrow">Why homeowners choose us</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">Electrical work you can actually trust</h2>
                    <p className="mt-4 text-lg text-navy-700/80">
                        No jargon, no shortcuts — just licensed, tidy, reliable work from an electrician
                        your neighbours already recommend.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {REASONS.map((r) => (
                        <div key={r.title} className="card p-6">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-cyan-bright">
                                <Icon name={r.icon} />
                            </span>
                            <h3 className="mt-5 text-lg">{r.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{r.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Icon({ name }: { name: 'shield' | 'tag' | 'clock' | 'star' }) {
    const p = {
        className: 'h-6 w-6',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.7,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    }
    if (name === 'shield')
        return (
            <svg {...p}>
                <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
                <path d="m9.5 12 1.8 1.8L15 10" />
            </svg>
        )
    if (name === 'tag')
        return (
            <svg {...p}>
                <path d="M20.6 13.4 12 22l-9-9V4h9l8.6 8.6a1.4 1.4 0 0 1 0 2Z" />
                <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
        )
    if (name === 'clock')
        return (
            <svg {...p}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
        )
    return (
        <svg {...p} fill="currentColor" stroke="none">
            <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
        </svg>
    )
}
