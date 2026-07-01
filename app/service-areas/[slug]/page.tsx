import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SUBURBS, getSuburb } from '@/data/suburbs'
import { SERVICES } from '@/data/services'
import { REVIEWS, reviewsForSuburb } from '@/data/reviews'
import type { Faq } from '@/data/faqs'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import ServiceIcon from '@/components/ServiceIcon'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reviews from '@/components/Reviews'
import FaqSection from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export function generateStaticParams() {
    return SUBURBS.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const s = getSuburb(params.slug)
    if (!s) return {}
    return {
        title: `Electrician ${s.name} | Safety Pro Electrical`,
        description: `Licensed A-Grade electrician servicing ${s.name} (${s.council}). Emergency call-outs, switchboards, EV chargers, safety switches, lighting & rewiring. 4.7★ rated. Call ${SITE.phoneDisplay}.`,
        alternates: { canonical: `/service-areas/${s.slug}/` },
        openGraph: {
            title: `Electrician ${s.name} | ${SITE.name}`,
            description: `Your trusted local electrician in ${s.name}. Free quotes, fully licensed & insured.`,
            url: `${SITE.url}/service-areas/${s.slug}/`,
        },
    }
}

function suburbFaqs(name: string, council: string): Faq[] {
    return [
        {
            q: `Do you service ${name}?`,
            a: `Yes — ${name} (${council}) is part of our regular service area. We're based nearby in ${SITE.baseSuburb} and work throughout the area every week, so we know it well.`,
        },
        {
            q: `How quickly can you get to ${name}?`,
            a: `Being local, we can often offer same-day service in ${name}. For genuine electrical emergencies we answer the phone 24/7 and prioritise getting to you fast.`,
        },
        {
            q: `Are you licensed and insured to work in ${name}?`,
            a: `Absolutely. We hold an A-Grade Electrical Licence (A68377) and are a Registered Electrical Contractor (REC-33712) with Energy Safe Victoria, fully insured, with every job backed by a Certificate of Electrical Safety.`,
        },
    ]
}

export default function SuburbPage({ params }: { params: { slug: string } }) {
    const suburb = getSuburb(params.slug)
    if (!suburb) notFound()

    const nearby = SUBURBS.filter((s) => s.slug !== suburb.slug)
    const localReviews = reviewsForSuburb(suburb.name)
    const reviews = (localReviews.length ? localReviews : REVIEWS).slice(0, 3)
    const faqs = suburbFaqs(suburb.name, suburb.council)
    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas/' },
        { name: suburb.name, path: `/service-areas/${suburb.slug}/` },
    ]

    return (
        <>
            <JsonLd data={faqSchema(faqs)} />
            <JsonLd data={breadcrumbSchema(crumbs)} />

            {/* Hero */}
            <section className="grid-glow bg-navy-900 text-white">
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x grid items-center gap-10 pb-16 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
                    <div>
                        <span className="eyebrow !text-cyan-bright">Local electrician · {suburb.council}</span>
                        <h1 className="mt-4 text-4xl text-white sm:text-5xl">
                            Electrician <span className="text-cyan-bright">{suburb.name}</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{suburb.localAngle}</p>
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
                            <dl className="space-y-4 text-sm">
                                <Fact label="Local to" value={`${SITE.baseSuburb} & ${suburb.name}`} />
                                <Fact label="Response" value="Often same-day · 24/7 emergency" />
                                <Fact label="Licensed" value="A-Grade A68377 · REC-33712" />
                                <Fact label="Rated" value={`${SITE.rating.value}★ (${SITE.rating.count} reviews)`} />
                            </dl>
                            <a href={SITE.phoneHref} className="btn-call mt-6 w-full">
                                Call {SITE.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services in this suburb */}
            <section className="section bg-white">
                <div className="container-x">
                    <span className="eyebrow">What we do in {suburb.name}</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">Electrical services in {suburb.name}</h2>
                    <p className="mt-4 max-w-2xl text-lg text-navy-700/80">
                        Whatever your home in {suburb.name} needs, we cover it — safely, tidily and to
                        Australian standards.
                    </p>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}/`}
                                className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                            >
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep group-hover:bg-cyan group-hover:text-white">
                                    <ServiceIcon name={s.icon} />
                                </span>
                                <h3 className="mt-5 text-lg">{s.title}</h3>
                                <p className="mt-2 flex-1 text-sm text-navy-700/75">{s.tagline}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Reviews
                reviews={reviews}
                heading={localReviews.length ? `Reviews from ${suburb.name} & nearby` : 'What our customers say'}
                summary={false}
            />

            {/* Nearby areas */}
            <section className="section bg-white">
                <div className="container-x">
                    <span className="eyebrow">Nearby areas</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">We also service these suburbs</h2>
                    <div className="mt-8 flex flex-wrap gap-2.5">
                        {nearby.map((s) => (
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

            <FaqSection faqs={faqs} heading={`Electrician ${suburb.name} — FAQs`} />

            <CtaBand
                heading={`Need an electrician in ${suburb.name}?`}
                subtitle={`Call Arif on ${SITE.phoneDisplay} or request a free quote — fast, friendly, fully licensed.`}
            />
        </>
    )
}

function Fact({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
            <dt className="text-white/55">{label}</dt>
            <dd className="text-right font-semibold text-white">{value}</dd>
        </div>
    )
}
