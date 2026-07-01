import { SITE, CTA } from '@/lib/site'

/** Reusable closing CTA band for subpages. */
export default function CtaBand({
    heading = 'Get a fast, free quote today',
    subtitle,
    quoteHref = CTA.quoteHref,
}: {
    heading?: string
    subtitle?: string
    quoteHref?: string
}) {
    return (
        <section className="grid-glow bg-navy-900 text-white">
            <div className="container-x section text-center">
                <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">{heading}</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                    {subtitle ??
                        `Call now and speak directly with a licensed electrician, or request a quote and we'll get back to you fast.`}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href={SITE.phoneHref} className="btn-call text-lg">
                        {CTA.callLabel}
                    </a>
                    <a href={quoteHref} className="btn-ghost-light text-lg">
                        {CTA.quoteLabel}
                    </a>
                </div>
            </div>
        </section>
    )
}
