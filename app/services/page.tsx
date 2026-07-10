import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { breadcrumbSchema } from '@/lib/schema'
import ServiceIcon from '@/components/ServiceIcon'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroCircuits from '@/components/HeroCircuits'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Electrical Services',
    description:
        'Electrical work across South-East Melbourne: emergencies, switchboards, safety switches, smoke alarms, EV chargers, lighting and rewiring.',
    alternates: { canonical: '/services/' },
    openGraph: {
        title: `Electrical Services | ${SITE.name}`,
        description: 'Emergencies, switchboards, EV chargers, lighting and rewiring — licensed & insured.',
        url: `${SITE.url}/services/`,
        images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    },
}

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
]

export default function ServicesIndex() {
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />

            <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
                <HeroCircuits />
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x pb-16 pt-4 lg:pb-20">
                    <span className="eyebrow !text-cyan-bright">What we do</span>
                    <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-5xl">
                        Electrical services for homes across South-East Melbourne
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-white/75">
                        Licensed, insured and rated 4.7★. Every job meets Australian standards and
                        comes with a Certificate of Electrical Safety.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href={SITE.phoneHref} className="btn-call text-lg">
                            {CTA.callLabel}
                        </a>
                        <Link href={CTA.quoteHref} className="btn-primary text-lg">
                            {CTA.quoteLabel}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section bg-mist">
                <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}/`}
                            className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                        >
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep group-hover:bg-cyan group-hover:text-white">
                                <ServiceIcon name={s.icon} />
                            </span>
                            <h2 className="mt-5 flex items-center gap-2 text-xl">
                                {s.title}
                                {s.emergency && (
                                    <span className="rounded-full bg-safety-green/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-safety-green">
                                        24/7
                                    </span>
                                )}
                            </h2>
                            <p className="mt-2 flex-1 text-navy-700/75">{s.intro}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-deep">
                                Learn more
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <CtaBand />
        </>
    )
}
