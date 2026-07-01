import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SERVICES, getService } from '@/data/services'
import { PRIORITY_SUBURBS } from '@/data/suburbs'
import { REVIEWS } from '@/data/reviews'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import ServiceIcon from '@/components/ServiceIcon'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const s = getService(params.slug)
    if (!s) return {}
    return {
        title: `${s.title} ${SITE.region}`,
        description: `${s.intro} Licensed & insured, 4.7★ rated. Call ${SITE.phoneDisplay} for a free quote.`,
        alternates: { canonical: `/services/${s.slug}/` },
        openGraph: {
            title: `${s.title} | ${SITE.name}`,
            description: s.tagline,
            url: `${SITE.url}/services/${s.slug}/`,
        },
    }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = getService(params.slug)
    if (!service) notFound()

    const others = SERVICES.filter((s) => s.slug !== service.slug)
    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services/' },
        { name: service.title, path: `/services/${service.slug}/` },
    ]

    return (
        <>
            <JsonLd data={serviceSchema(service.slug)!} />
            <JsonLd data={faqSchema(service.faqs)} />
            <JsonLd data={breadcrumbSchema(crumbs)} />

            {/* Hero */}
            <section className="grid-glow bg-navy-900 text-white">
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x grid items-center gap-10 pb-16 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
                    <div>
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/15 text-cyan-bright">
                            <ServiceIcon name={service.icon} className="h-8 w-8" />
                        </span>
                        <h1 className="mt-6 text-4xl text-white sm:text-5xl">{service.title}</h1>
                        <p className="mt-3 text-xl text-cyan-bright">{service.tagline}</p>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{service.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={SITE.phoneHref} className="btn-call text-lg">
                                {CTA.callLabel}
                            </a>
                            <Link href={CTA.quoteHref} className="btn-primary text-lg">
                                {CTA.quoteLabel}
                            </Link>
                        </div>
                    </div>

                    <div className="lg:justify-self-end">
                        <div className="w-full max-w-sm rounded-xl2 border border-white/10 bg-white/[0.04] p-7">
                            <h2 className="text-lg text-white">What we help with</h2>
                            <ul className="mt-4 space-y-3">
                                {service.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-white/85">
                                        <Tick className="mt-0.5 flex-shrink-0 text-cyan-bright" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="section bg-white">
                <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <span className="eyebrow">Why Safety Pro</span>
                        <h2 className="mt-3 text-3xl">Done properly, the first time</h2>
                        <p className="mt-4 text-lg leading-relaxed text-navy-700/80">{service.reassurance}</p>
                        <p className="mt-4 text-lg leading-relaxed text-navy-700/80">
                            Every job is carried out by a licensed A-Grade electrician (A68377, REC-33712),
                            completed to AS/NZS 3000 standards and finished with a Certificate of Electrical
                            Safety. Fully insured, upfront pricing, no mess left behind.
                        </p>
                    </div>
                    <div className="card h-fit p-6">
                        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-deep">Fast & local</p>
                        <p className="mt-2 text-navy-700/80">
                            Based in {SITE.baseSuburb}, servicing all of {SITE.region}. Same-day service is
                            often available, and we answer the phone 24/7 for emergencies.
                        </p>
                        <a href={SITE.phoneHref} className="btn-call mt-5 w-full">
                            Call {SITE.phoneDisplay}
                        </a>
                    </div>
                </div>
            </section>

            <Reviews reviews={REVIEWS.slice(0, 3)} heading={`What customers say about our work`} summary={false} />

            {/* Areas */}
            <section className="section bg-white">
                <div className="container-x">
                    <span className="eyebrow">Service areas</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">
                        {service.title} across South-East Melbourne
                    </h2>
                    <div className="mt-8 flex flex-wrap gap-2.5">
                        {PRIORITY_SUBURBS.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/service-areas/${s.slug}/`}
                                className="rounded-full border border-navy-700/15 bg-mist px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-cyan hover:text-cyan-deep"
                            >
                                {s.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Faq faqs={service.faqs} heading={`${service.title} — questions & answers`} />

            {/* Other services */}
            <section className="section bg-mist">
                <div className="container-x">
                    <h2 className="text-2xl sm:text-3xl">Other services</h2>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {others.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}/`}
                                className="card group flex items-center gap-4 p-5 transition-all hover:-translate-y-1 hover:shadow-lift"
                            >
                                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep group-hover:bg-cyan group-hover:text-white">
                                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                                </span>
                                <span className="font-semibold text-navy-900">{s.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand heading={`Need ${indefinite(service.title)}?`} />
        </>
    )
}

function indefinite(title: string) {
    return /^[aeiou]/i.test(title) ? `an ${title.toLowerCase()}` : `a ${title.toLowerCase()}`
}

function Tick({ className = '' }: { className?: string }) {
    return (
        <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
