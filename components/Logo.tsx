import { SITE } from '@/lib/site'

/** Shield + lightbulb + bolt mark, rebuilt as clean SVG from the business card. */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" className={className} role="img" aria-label={`${SITE.name} logo`}>
            <defs>
                <linearGradient id="speCyan" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#35c0f5" />
                    <stop offset="1" stopColor="#0d84bd" />
                </linearGradient>
            </defs>
            {/* shield */}
            <path
                d="M32 4 L56 12 V30 C56 44 46 54 32 60 C18 54 8 44 8 30 V12 Z"
                fill="none"
                stroke="url(#speCyan)"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            {/* bulb */}
            <path
                d="M32 15 a12 12 0 0 1 7.5 21.4 c-1 .9 -1.5 2 -1.5 3.3 h-12 c0 -1.3 -.5 -2.4 -1.5 -3.3 A12 12 0 0 1 32 15 Z"
                fill="none"
                stroke="url(#speCyan)"
                strokeWidth="2.4"
                strokeLinejoin="round"
            />
            {/* base contacts */}
            <path d="M27 44 h10 M28.5 48 h7" stroke="url(#speCyan)" strokeWidth="2.4" strokeLinecap="round" />
            {/* bolt */}
            <path d="M34 21 l-7 10.5 h5.2 l-2.2 8.5 8.5 -12 h-5.3 Z" fill="url(#speCyan)" />
        </svg>
    )
}

/** Full lockup: mark + wordmark. `light` = for dark backgrounds. */
export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
    return (
        <span className={`inline-flex items-center gap-2.5 ${className}`}>
            <LogoMark className="h-9 w-9 shrink-0" />
            <span className="flex flex-col leading-none">
                <span
                    className={`font-display text-[1.15rem] font-bold leading-none tracking-tight ${
                        light ? 'text-white' : 'text-navy-900'
                    }`}
                >
                    Safety Pro
                </span>
                <span className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-cyan-bright">
                    Electrical
                </span>
            </span>
        </span>
    )
}
