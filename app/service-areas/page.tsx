import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SUBURBS, ALSO_SERVICING } from '@/data/suburbs'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroCircuits from '@/components/HeroCircuits'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Service Areas — South-East Melbourne',
    description:
        'Safety Pro Electrical services South-East Melbourne — Casey, Cardinia, Greater Dandenong, Knox, Monash and Frankston. Cranbourne, Clyde North, Narre Warren, Berwick, Officer, Pakenham, Dandenong & more.',
    alternates: { canonical: '/service-areas/' },
}

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas/' },
]

export default function ServiceAreasIndex() {
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />

            <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
                <HeroCircuits />
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x pb-16 pt-4 lg:pb-20">
                    <span className="eyebrow !text-cyan-bright">Where we work</span>
                    <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-5xl">
                        Your local electrician across South-East Melbourne
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-white/75">
                        Based in {SITE.baseSuburb}, we cover the City of Casey, Cardinia Shire, Greater
                        Dandenong, Knox, Monash and Frankston — with fast, friendly local service.
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
                <div className="container-x">
                    <h2 className="text-2xl sm:text-3xl">Popular service areas</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {SUBURBS.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/service-areas/${s.slug}/`}
                                className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                            >
                                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-deep">
                                    {s.council}
                                </span>
                                <span className="mt-1 text-lg font-bold text-navy-900">Electrician {s.name}</span>
                                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-deep">
                                    View area
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <h3 className="mt-14 text-xl">Also servicing</h3>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                        {ALSO_SERVICING.map((name) => (
                            <span
                                key={name}
                                className="rounded-full border border-navy-700/15 bg-white px-4 py-2 text-sm font-medium text-navy-700"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand />
        </>
    )
}
