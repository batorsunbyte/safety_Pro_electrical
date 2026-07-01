import { SITE, CTA } from '@/lib/site'
import { REVIEWS } from '@/data/reviews'
import QuoteForm from './QuoteForm'

/**
 * Reusable "request a quote" section. Dropped on the home page and every
 * service/suburb landing page so the form is always ON the page (no click-away),
 * with the service/suburb pre-filled.
 */
export default function QuoteBlock({
    heading = 'Request your free quote',
    subtitle,
    defaultService = '',
    defaultSuburb = '',
    excludeNames = [],
}: {
    heading?: string
    subtitle?: string
    defaultService?: string
    defaultSuburb?: string
    /** Reviewers already shown on this page — never repeat them as the proof quote. */
    excludeNames?: string[]
}) {
    const candidates = REVIEWS.filter((r) => !excludeNames.includes(r.name))
    const proof =
        candidates.find((r) => r.name.startsWith('Antoinette')) ?? candidates[0] ?? REVIEWS[0]

    return (
        <section id="quote" className="section scroll-mt-24 bg-mist">
            <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <span className="eyebrow">Get in touch</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">{heading}</h2>
                    <p className="mt-4 text-lg text-navy-700/80">
                        {subtitle ??
                            `Fill in a few details and we'll get back to you fast with an honest, no-obligation quote. Prefer to talk? Call Arif directly — we answer the phone.`}
                    </p>

                    <ul className="mt-8 space-y-3">
                        {[
                            'Free, no-obligation quotes',
                            'No call-out fee on quoted jobs',
                            'Fully licensed (A68377) & insured',
                            'Local & quick — often same-day service',
                        ].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-navy-800">
                                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-safety-green/15 text-safety-green">
                                    <Tick />
                                </span>
                                {t}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href={SITE.phoneHref} className="btn-call">
                            <PhoneIcon className="h-5 w-5" />
                            {CTA.callLabel}
                        </a>
                        <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn-ghost">
                            WhatsApp us
                        </a>
                    </div>

                    {/* Mini social proof at the point of decision */}
                    <figure className="mt-8 rounded-xl2 border border-navy-700/10 bg-white p-5 shadow-card">
                        <span className="flex text-cyan-deep" aria-hidden>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                                </svg>
                            ))}
                        </span>
                        <blockquote className="mt-2 text-navy-700/85">“{proof.text}”</blockquote>
                        <figcaption className="mt-2 text-sm font-semibold text-navy-900">
                            {proof.name} — {proof.suburb}, VIC{' '}
                            <span className="font-normal text-navy-700/55">· via hipages</span>
                        </figcaption>
                    </figure>
                </div>

                <QuoteForm defaultService={defaultService} defaultSuburb={defaultSuburb} />
            </div>
        </section>
    )
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
        </svg>
    )
}
function Tick() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
