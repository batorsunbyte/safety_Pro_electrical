'use client'

import { usePathname } from 'next/navigation'
import { SITE, CTA } from '@/lib/site'

/** Pages that render an on-page #quote form (so the Quote button scrolls instead of navigating). */
function hasOnPageQuote(pathname: string) {
    const p = pathname.replace(/\/$/, '') || '/'
    return p === '/' || p === '/contact' || p.startsWith('/services/') || p.startsWith('/service-areas/')
}

/** Fixed bottom action bar on mobile — a call is never more than one tap away. */
export default function MobileCallBar() {
    const pathname = usePathname()
    const quoteHref = hasOnPageQuote(pathname) ? '#quote' : CTA.quoteHref

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-700/10 bg-white/95 px-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-8px_24px_rgba(10,18,32,0.12)] backdrop-blur lg:hidden">
            <p className="mb-1.5 text-center text-[0.7rem] font-semibold text-navy-700/70">
                {SITE.rating.value}★ · Licensed A-Grade · Fully insured
            </p>
            <div className="mx-auto flex max-w-md gap-2.5">
                <a href={SITE.phoneHref} className="btn-call flex-1 !px-3 !py-3 text-[0.95rem]">
                    <PhoneIcon className="h-5 w-5" />
                    {SITE.phoneDisplay}
                </a>
                <a href={quoteHref} className="btn-primary flex-1 !px-3 !py-3 text-[0.95rem]">
                    Free Quote
                </a>
            </div>
        </div>
    )
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
        </svg>
    )
}
