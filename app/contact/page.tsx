import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroCircuits from '@/components/HeroCircuits'
import QuoteForm from '@/components/QuoteForm'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Contact & Free Quote',
    description:
        'Contact Safety Pro Electrical for a free, no-obligation quote. Call 0490 101 365, message us on WhatsApp, or request a quote online. Licensed electrician servicing South-East Melbourne.',
    alternates: { canonical: '/contact/' },
}

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact/' },
]

export default function ContactPage() {
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />

            <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
                <HeroCircuits />
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x pb-14 pt-4">
                    <span className="eyebrow !text-cyan-bright">Get in touch</span>
                    <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-5xl">
                        Contact us for a fast, free quote
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-white/75">
                        Call or message and you&apos;ll speak directly with a licensed electrician. For
                        emergencies, we&apos;re available 24/7.
                    </p>
                </div>
            </section>

            <section id="quote" className="section scroll-mt-24 bg-mist">
                <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Contact methods */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl">Ways to reach us</h2>
                        <div className="mt-6 space-y-4">
                            <ContactRow
                                href={SITE.phoneHref}
                                label="Call us"
                                value={SITE.phoneDisplay}
                                hint="Mon–Sat · 24/7 for emergencies"
                                icon="phone"
                            />
                            <ContactRow
                                href={SITE.whatsappHref}
                                label="WhatsApp"
                                value={SITE.phoneDisplay}
                                hint="Send photos of the job for a quick quote"
                                icon="chat"
                                external
                            />
                            <ContactRow
                                href={SITE.emailHref}
                                label="Email"
                                value={SITE.email}
                                hint="We reply promptly"
                                icon="mail"
                            />
                            <div className="card flex items-start gap-4 p-5">
                                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep">
                                    <Icon name="pin" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-navy-900">Service area</p>
                                    <p className="text-navy-700/80">
                                        Based in {SITE.baseSuburb} {SITE.state} {SITE.postcode} — servicing all of{' '}
                                        {SITE.region}.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-xl2 border border-navy-700/10 shadow-card">
                            <iframe
                                title={`${SITE.name} service area map`}
                                src="https://www.google.com/maps?q=Cranbourne%20East%20VIC%203977&output=embed"
                                width="100%"
                                height="280"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0 }}
                            />
                        </div>
                    </div>

                    {/* Quote form */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl">Request a free quote</h2>
                        <p className="mt-2 text-navy-700/75">
                            Tell us about the job and we&apos;ll get back to you fast.
                        </p>
                        <div className="mt-6">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ContactRow({
    href,
    label,
    value,
    hint,
    icon,
    external,
}: {
    href: string
    label: string
    value: string
    hint: string
    icon: 'phone' | 'chat' | 'mail'
    external?: boolean
}) {
    return (
        <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener' } : {})}
            className="card flex items-start gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep">
                <Icon name={icon} />
            </span>
            <div>
                <p className="text-sm font-semibold text-navy-900">{label}</p>
                <p className="text-lg font-bold text-cyan-deep">{value}</p>
                <p className="text-sm text-navy-700/70">{hint}</p>
            </div>
        </a>
    )
}

function Icon({ name }: { name: 'phone' | 'chat' | 'mail' | 'pin' }) {
    const p = {
        className: 'h-5 w-5',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    }
    if (name === 'phone')
        return (
            <svg {...p}>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
            </svg>
        )
    if (name === 'chat')
        return (
            <svg {...p}>
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.7 8.7 0 0 1-3.8-.8L3 20l1-4.2A8.3 8.3 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
            </svg>
        )
    if (name === 'mail')
        return (
            <svg {...p}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
        )
    return (
        <svg {...p}>
            <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    )
}
