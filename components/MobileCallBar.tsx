import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'

/** Fixed bottom action bar on mobile — call is never more than one tap away. */
export default function MobileCallBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-700/10 bg-white/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(10,18,32,0.12)] backdrop-blur lg:hidden">
            <div className="mx-auto flex max-w-md gap-2.5">
                <a href={SITE.phoneHref} className="btn-call flex-1 !py-3">
                    <PhoneIcon className="h-5 w-5" />
                    Call Now
                </a>
                <Link href={CTA.quoteHref} className="btn-primary flex-1 !py-3">
                    Free Quote
                </Link>
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
