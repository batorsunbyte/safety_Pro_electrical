import Link from 'next/link'
import { SITE } from '@/lib/site'
import { REVIEWS, type Review } from '@/data/reviews'

export default function Reviews({
    reviews = REVIEWS,
    heading = 'Trusted by hundreds of local homeowners',
    summary = true,
    moreHref,
    id = 'reviews',
}: {
    reviews?: Review[]
    heading?: string
    summary?: boolean
    moreHref?: string
    id?: string
}) {
    const r = SITE.rating
    return (
        <section id={id} className="section scroll-mt-24 bg-navy-900 text-white">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <span className="eyebrow !text-cyan-bright">Real reviews</span>
                        <h2 className="mt-3 text-3xl text-white sm:text-4xl">{heading}</h2>
                    </div>
                    {summary && (
                        <div className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.04] px-5 py-4">
                            <div className="text-4xl font-bold text-cyan-bright">{r.value}</div>
                            <div className="text-sm">
                                <Stars />
                                <p className="mt-1 text-white/70">
                                    {r.count} ratings · {r.hires} hires
                                </p>
                                <p className="text-white/70">via {r.source}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((rev) => (
                        <figure
                            key={`${rev.name}-${rev.date}`}
                            className="flex flex-col overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.04] p-6"
                        >
                            {rev.image && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={rev.image}
                                    alt={`${rev.service} by Safety Pro Electrical in ${rev.suburb}`}
                                    loading="lazy"
                                    className="mb-4 -mx-6 -mt-6 h-40 w-[calc(100%+3rem)] object-cover"
                                />
                            )}
                            <Stars />
                            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/85">
                                “{rev.text}”
                            </blockquote>
                            <figcaption className="mt-5 border-t border-white/10 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-white">{rev.name}</span>
                                    <span className="text-xs text-white/70">{rev.date}</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between text-xs">
                                    <span className="text-white/60">{rev.suburb}, VIC</span>
                                    <span className="rounded-full bg-cyan/15 px-2 py-0.5 font-medium text-cyan-bright">
                                        {rev.service}
                                    </span>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-4">
                    {moreHref && (
                        <Link href={moreHref} className="btn-ghost-light">
                            Read more reviews
                        </Link>
                    )}
                    <p className="text-center text-sm text-white/50">
                        Verified customer reviews from Arif&apos;s{' '}
                        <a href={r.sourceUrl} className="text-cyan-bright hover:underline" rel="nofollow noopener" target="_blank">
                            hipages profile
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    )
}

function Stars() {
    return (
        <span className="flex text-cyan-bright" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                </svg>
            ))}
        </span>
    )
}
