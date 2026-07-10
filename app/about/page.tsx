import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { REVIEWS } from '@/data/reviews'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroCircuits from '@/components/HeroCircuits'
import WhyUs from '@/components/WhyUs'
import Reviews from '@/components/Reviews'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { LogoMark } from '@/components/Logo'

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Licensed A-Grade electrical business in Cranbourne East, serving South-East Melbourne since 2022. Honest, safety-first work rated 4.7★.',
    alternates: { canonical: '/about/' },
    openGraph: {
        title: `About Us | ${SITE.name}`,
        description: 'Licensed A-Grade electricians in Cranbourne East, serving South-East Melbourne since 2022.',
        url: `${SITE.url}/about/`,
        images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    },
}

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/' },
]

export default function AboutPage() {
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />

            <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
                <HeroCircuits />
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x grid items-center gap-10 pb-16 pt-4 lg:grid-cols-[1.2fr_0.8fr] lg:pb-24">
                    <div>
                        <span className="eyebrow !text-cyan-bright">About Safety Pro Electrical</span>
                        <h1 className="mt-4 text-4xl text-white sm:text-5xl">
                            A local electrician your neighbours trust
                        </h1>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                            Safety Pro Electrical is run by <strong className="text-white">Arif Daryabi</strong>,
                            a licensed A-Grade electrician in {SITE.baseSuburb}. Since {SITE.memberSince},
                            we&apos;ve built our name one good job at a time, right across South-East Melbourne.
                        </p>
                    </div>
                    <div className="lg:justify-self-end">
                        <div className="w-full max-w-sm rounded-xl2 border border-white/10 bg-white/[0.04] p-7 text-center">
                            <LogoMark className="mx-auto h-20 w-20" />
                            <p className="mt-4 text-4xl font-bold text-cyan-bright">{SITE.rating.value}★</p>
                            <p className="text-white/70">
                                {SITE.rating.count} ratings · {SITE.rating.recommendations} recommendations
                            </p>
                            <p className="mt-1 text-sm text-white/45">{SITE.rating.hires} jobs on {SITE.rating.source}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section bg-white">
                <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
                    <div className="space-y-5 text-lg leading-relaxed text-navy-700/80">
                        <h2 className="text-3xl text-navy-900">Our story</h2>
                        <p>
                            It started with a few jobs for friends and neighbours. Word of mouth did the rest.
                        </p>
                        <p>
                            Our approach is simple. Turn up on time. Explain the work in plain English. Charge
                            a fair, upfront price. Leave every job safe and tidy. That&apos;s why customers across
                            Cranbourne, Clyde North, Berwick, Pakenham and Dandenong keep calling us back.
                        </p>
                        <p>
                            From one power point to a full rewire, every job meets Australian standards
                            (AS/NZS 3000) and comes with a Certificate of Electrical Safety. No shortcuts,
                            no surprises.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/clipsal-breakers.webp"
                            alt="Close-up of circuit breakers in a residential switchboard"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-xl2 border border-navy-700/10 object-cover shadow-card"
                        />
                        <div className="card h-fit p-7">
                        <h3 className="text-lg">Licensed &amp; insured</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {SITE.licences.map((l) => (
                                <li key={l.value} className="flex items-start gap-3">
                                    <Tick className="mt-0.5 flex-shrink-0 text-safety-green" />
                                    <span>
                                        <span className="block font-semibold text-navy-900">{l.label}</span>
                                        <span className="text-navy-700/70">
                                            {l.value} · {l.issuer}
                                        </span>
                                    </span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3">
                                <Tick className="mt-0.5 flex-shrink-0 text-safety-green" />
                                <span className="text-navy-700/80">Fully insured · ABN {SITE.abn}</span>
                            </li>
                        </ul>
                            <a href={SITE.phoneHref} className="btn-call mt-6 w-full">
                                Call {SITE.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs />
            <Reviews reviews={REVIEWS.slice(0, 3)} heading="What our customers say" summary={false} moreHref="/reviews/" />
            <CtaBand />
        </>
    )
}

function Tick({ className = '' }: { className?: string }) {
    return (
        <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
