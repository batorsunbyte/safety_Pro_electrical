import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import { REVIEWS } from '@/data/reviews'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroCircuits from '@/components/HeroCircuits'
import Reviews from '@/components/Reviews'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Reviews',
    description:
        'Read real customer reviews for Safety Pro Electrical — rated 4.7★ across South-East Melbourne for switchboards, EV chargers, lighting, rewiring and emergency electrical work.',
    alternates: { canonical: '/reviews/' },
}

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Reviews', path: '/reviews/' },
]

export default function ReviewsPage() {
    const r = SITE.rating
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />

            <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
                <HeroCircuits />
                <div className="container-x py-6">
                    <Breadcrumbs items={crumbs} />
                </div>
                <div className="container-x flex flex-col items-start gap-8 pb-14 pt-4 md:flex-row md:items-center md:justify-between lg:pb-16">
                    <div className="max-w-2xl">
                        <span className="eyebrow !text-cyan-bright">Real reviews</span>
                        <h1 className="mt-4 text-4xl text-white sm:text-5xl">
                            Rated {r.value}★ by South-East Melbourne homeowners
                        </h1>
                        <p className="mt-5 text-lg text-white/75">
                            Honest feedback from real customers — {r.recommendations} positive recommendations
                            and {r.hires} completed jobs. Verified via {r.source}.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.04] px-6 py-5">
                        <div className="text-5xl font-bold text-cyan-bright">{r.value}</div>
                        <div className="text-sm text-white/70">
                            <p className="font-semibold text-white">out of 5</p>
                            <p>{r.count} ratings</p>
                            <p className="text-white/45">via {r.source}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Reviews reviews={REVIEWS} heading="Every review, straight from our customers" summary={false} />
            <CtaBand heading="Join hundreds of happy local customers" />
        </>
    )
}
