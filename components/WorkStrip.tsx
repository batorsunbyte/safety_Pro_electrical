import Link from 'next/link'
import { SERVICES } from '@/data/services'

/**
 * Visual band under the trust bar: three photo tiles linking to the
 * featured services. Images are licensed stock placeholders — swap the
 * files in /public/images for Arif's real job photos (same names).
 */
export default function WorkStrip() {
    const featured = SERVICES.filter((s) => s.featured).slice(0, 3)

    return (
        <section className="bg-white pb-4 pt-10 sm:pt-12">
            <div className="container-x grid gap-4 sm:grid-cols-3">
                {featured.map((s) => (
                    <Link
                        key={s.slug}
                        href={`/services/${s.slug}/`}
                        className="group relative overflow-hidden rounded-xl2 shadow-card"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={s.image}
                            alt={s.imageAlt}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                        <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                            <span className="font-display text-lg font-bold text-white">{s.title}</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-cyan">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </span>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}
