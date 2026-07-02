import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { PRIORITY_SUBURBS, ALSO_SERVICING } from '@/data/suburbs'
import { REVIEWS } from '@/data/reviews'
import { HOME_FAQS } from '@/data/faqs'
import { faqSchema } from '@/lib/schema'
import { LogoMark } from '@/components/Logo'
import ServiceIcon from '@/components/ServiceIcon'
import HeroCircuits from '@/components/HeroCircuits'
import WhyUs from '@/components/WhyUs'
import Steps from '@/components/Steps'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import QuoteBlock from '@/components/QuoteBlock'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export default function HomePage() {
    return (
        <>
            <JsonLd data={faqSchema(HOME_FAQS)} />
            <Hero />
            <TrustBar />
            <ServicesPreview />
            <WhyUs />
            <Steps />
            <Reviews reviews={REVIEWS.slice(0, 6)} moreHref="/reviews/" />
            <CtaBand heading="Ready to sort your electrical job?" quoteHref="#quote" />
            <AreasTeaser />
            <QuoteBlock excludeNames={REVIEWS.slice(0, 6).map((r) => r.name)} />
            <Faq faqs={HOME_FAQS} />
        </>
    )
}

/* ------------------------------------------------------------------ */

function Hero() {
    return (
        <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
            <div
                className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, #16a6e6 0%, transparent 65%)' }}
            />
            <HeroCircuits />
            <div className="container-x relative z-10 grid items-center gap-12 py-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
                <div className="animate-fade-up">
                    <span className="eyebrow !text-cyan-bright">
                        <BoltDot /> Licensed A-Grade Electricians
                        <span className="hidden sm:inline"> · {SITE.baseSuburb}</span>
                    </span>
                    <h1 className="mt-4 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                        Fast, honest electrical work across{' '}
                        <span className="text-cyan-bright">South-East Melbourne</span>.
                    </h1>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                        From 24/7 emergency call-outs to switchboard upgrades, EV chargers and full
                        rewires — Arif is the electrician your neighbours keep recommending.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a href={SITE.phoneHref} className="btn-call text-lg animate-pulse-ring">
                            <PhoneIcon className="h-5 w-5" />
                            {CTA.callLabel}
                        </a>
                        <a href="#quote" className="btn-primary text-lg">
                            {CTA.quoteLabel}
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-white/60">
                        {SITE.responsePromise} · Upfront fixed-price quotes
                    </p>

                    <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                        <li className="flex items-center gap-2">
                            <Stars /> <span>{SITE.rating.value}★ · {SITE.rating.count} reviews</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Tick /> Fully licensed & insured
                        </li>
                        <li className="flex items-center gap-2">
                            <Tick /> 24/7 emergency call-outs
                        </li>
                        <li className="flex items-center gap-2">
                            <Tick /> {SITE.rating.hires}+ local jobs
                        </li>
                    </ul>
                </div>

                {/* Credential card (stands in for hero photo until real job shots arrive) */}
                <div className="animate-fade-up lg:justify-self-end">
                    <div className="w-full max-w-sm rounded-xl2 border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                        <div className="flex items-center gap-3">
                            <LogoMark className="h-14 w-14" />
                            <div>
                                <p className="font-display text-lg font-bold text-white">Safety Pro Electrical</p>
                                <p className="text-sm text-white/60">Cranbourne East · Est. {SITE.memberSince}</p>
                            </div>
                        </div>
                        <div className="my-6 h-px bg-white/10" />
                        <dl className="space-y-3 text-sm">
                            <CredRow label="A-Grade Licence" value="A68377" />
                            <CredRow label="Reg. Electrical Contractor" value="REC-33712" />
                            <CredRow label="ABN" value={SITE.abn} />
                            <CredRow label="hipages rating" value={`${SITE.rating.value}★ (${SITE.rating.count})`} />
                        </dl>
                        <p className="mt-6 rounded-lg bg-cyan/10 px-4 py-3 text-center text-sm font-medium text-cyan-bright">
                            Free quotes · No call-out fee on quoted jobs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CredRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-4">
            <dt className="text-white/60">{label}</dt>
            <dd className="font-semibold text-white">{value}</dd>
        </div>
    )
}

/* ------------------------------------------------------------------ */

function TrustBar() {
    const items = [
        'A-Grade Licensed (A68377)',
        'Registered Contractor (REC-33712)',
        'Fully Insured',
        `${SITE.rating.value}★ on hipages`,
        'AS/NZS 3000 Compliant',
        'Certificate of Electrical Safety',
    ]
    return (
        <section className="border-b border-navy-700/10 bg-white">
            <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm font-semibold text-navy-700">
                {items.map((t) => (
                    <span key={t} className="flex items-center gap-2">
                        <Tick className="text-safety-green" />
                        {t}
                    </span>
                ))}
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */

function ServicesPreview() {
    return (
        <section id="services" className="section scroll-mt-24 bg-mist">
            <div className="container-x">
                <div className="max-w-2xl">
                    <span className="eyebrow">What we do</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">Electrical services, done properly</h2>
                    <p className="mt-4 text-lg text-navy-700/80">
                        Every job is completed to Australian standards and backed by a Certificate of
                        Electrical Safety — whether it&apos;s a quick fix or a full rewire.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}/`}
                            className="card group flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
                        >
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep transition-colors group-hover:bg-cyan group-hover:text-white">
                                <ServiceIcon name={s.icon} />
                            </span>
                            <h3 className="mt-5 flex items-center gap-2 text-xl">
                                {s.title}
                                {s.emergency && (
                                    <span className="rounded-full bg-safety-green/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-safety-green">
                                        24/7
                                    </span>
                                )}
                            </h3>
                            <p className="mt-2 flex-1 text-navy-700/75">{s.tagline}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-deep">
                                Learn more
                                <Arrow className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */

function AreasTeaser() {
    return (
        <section id="areas" className="section scroll-mt-24 bg-white">
            <div className="container-x">
                <div className="max-w-2xl">
                    <span className="eyebrow">Where we work</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">Proudly serving South-East Melbourne</h2>
                    <p className="mt-4 text-lg text-navy-700/80">
                        Based in {SITE.baseSuburb}, we cover the City of Casey, Cardinia and beyond —
                        with fast local response times.
                    </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {PRIORITY_SUBURBS.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/service-areas/${s.slug}/`}
                            className="group flex items-center justify-between rounded-xl border border-navy-700/10 bg-mist px-5 py-4 font-semibold text-navy-800 transition-colors hover:border-cyan hover:bg-cyan/5"
                        >
                            <span>{s.name}</span>
                            <Arrow className="text-cyan-deep transition-transform group-hover:translate-x-1" />
                        </Link>
                    ))}
                </div>
                <p className="mt-6 text-sm text-navy-700/70">
                    Also servicing {ALSO_SERVICING.join(', ')} & surrounding suburbs.
                </p>
            </div>
        </section>
    )
}

/* ------------------------- tiny inline icons ------------------------ */

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
        </svg>
    )
}
function Tick({ className = '' }: { className?: string }) {
    return (
        <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
function Arrow({ className = '' }: { className?: string }) {
    return (
        <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}
function Stars() {
    return (
        <span className="flex text-cyan-bright" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                </svg>
            ))}
        </span>
    )
}
function BoltDot() {
    return <span className="text-cyan-bright">⚡</span>
}
