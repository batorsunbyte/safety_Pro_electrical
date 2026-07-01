import { SITE } from '@/lib/site'
import { REVIEWS } from '@/data/reviews'

export default function Reviews() {
    const r = SITE.rating
    return (
        <section id="reviews" className="section scroll-mt-24 bg-navy-900 text-white">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <span className="eyebrow !text-cyan-bright">Real reviews</span>
                        <h2 className="mt-3 text-3xl text-white sm:text-4xl">
                            Trusted by hundreds of local homeowners
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.04] px-5 py-4">
                        <div className="text-4xl font-bold text-cyan-bright">{r.value}</div>
                        <div className="text-sm">
                            <Stars />
                            <p className="mt-1 text-white/70">
                                {r.count} ratings · {r.hires} hires
                            </p>
                            <p className="text-white/45">via {r.source}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {REVIEWS.map((rev) => (
                        <figure
                            key={`${rev.name}-${rev.date}`}
                            className="flex flex-col rounded-xl2 border border-white/10 bg-white/[0.04] p-6"
                        >
                            <Stars small />
                            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/85">
                                “{rev.text}”
                            </blockquote>
                            <figcaption className="mt-5 border-t border-white/10 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-white">{rev.name}</span>
                                    <span className="text-xs text-white/45">{rev.date}</span>
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

                <p className="mt-8 text-center text-sm text-white/50">
                    Verified customer reviews from Arif&apos;s{' '}
                    <a href={r.sourceUrl} className="text-cyan-bright hover:underline" rel="nofollow noopener" target="_blank">
                        hipages profile
                    </a>
                    .
                </p>
            </div>
        </section>
    )
}

function Stars({ small }: { small?: boolean }) {
    const size = small ? 'h-4 w-4' : 'h-4 w-4'
    return (
        <span className="flex text-cyan-bright" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                </svg>
            ))}
        </span>
    )
}
