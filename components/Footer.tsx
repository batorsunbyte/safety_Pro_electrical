import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { PRIORITY_SUBURBS, ALSO_SERVICING } from '@/data/suburbs'
import { Logo } from './Logo'

export default function Footer() {
    const year = 2026

    return (
        <footer className="grid-glow bg-navy-900 text-white/80">
            {/* CTA band */}
            <div className="border-b border-white/10">
                <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-2xl text-white sm:text-3xl">Need a licensed electrician today?</h2>
                        <p className="mt-2 max-w-xl text-white/70">
                            Fast, honest quotes across {SITE.region}. Emergency call-outs available 24/7.
                        </p>
                    </div>
                    <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
                        <a href={SITE.phoneHref} className="btn-call">
                            {CTA.callLabel}
                        </a>
                        <Link href={CTA.quoteHref} className="btn-ghost-light">
                            {CTA.quoteLabel}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Link columns */}
            <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Logo light />
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{SITE.shortPitch}</p>
                    <div className="mt-5 space-y-1.5 text-sm">
                        <a href={SITE.phoneHref} className="block font-semibold text-white hover:text-cyan-bright">
                            {SITE.phoneDisplay}
                        </a>
                        <a href={SITE.emailHref} className="block hover:text-cyan-bright">
                            {SITE.email}
                        </a>
                        <p className="text-white/60">
                            {SITE.baseSuburb} {SITE.state} {SITE.postcode}
                        </p>
                        <p className="text-white/60">{SITE.hours}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Services</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {SERVICES.map((s) => (
                            <li key={s.slug}>
                                <Link href={`/services/${s.slug}/`} className="hover:text-cyan-bright">
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Service Areas</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {PRIORITY_SUBURBS.map((s) => (
                            <li key={s.slug}>
                                <Link href={`/service-areas/${s.slug}/`} className="hover:text-cyan-bright">
                                    Electrician {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">
                        Also servicing {ALSO_SERVICING.slice(0, 8).join(', ')} & more.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Licensed & Insured</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        {SITE.licences.map((l) => (
                            <li key={l.value} className="flex items-start gap-2">
                                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety-green" />
                                <span>
                                    <span className="block text-white">{l.label}</span>
                                    <span className="text-white/55">
                                        {l.value} · {l.issuer}
                                    </span>
                                </span>
                            </li>
                        ))}
                        <li className="flex items-start gap-2">
                            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety-green" />
                            <span className="text-white/85">Fully insured · ABN {SITE.abn}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety-green" />
                            <span className="text-white/85">
                                {SITE.rating.value}★ from {SITE.rating.count} reviews on {SITE.rating.source}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar — extra mobile padding clears the fixed call bar */}
            <div className="border-t border-white/10">
                <div className="container-x flex flex-col items-center justify-between gap-2 pb-28 pt-6 text-xs text-white/50 sm:flex-row lg:pb-6">
                    <p>
                        © {year} {SITE.name}. All rights reserved. ABN {SITE.abn}.
                    </p>
                    <p>
                        Website by{' '}
                        <a href="https://sunbyte.at" className="hover:text-cyan-bright">
                            SunByte
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
