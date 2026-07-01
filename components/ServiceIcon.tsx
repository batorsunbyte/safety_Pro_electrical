import type { Service } from '@/data/services'

/** Lightweight stroke icons for each service. */
export default function ServiceIcon({
    name,
    className = 'h-7 w-7',
}: {
    name: Service['icon']
    className?: string
}) {
    const common = {
        className,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.7,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    }
    switch (name) {
        case 'bolt':
            return (
                <svg {...common}>
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                </svg>
            )
        case 'switchboard':
            return (
                <svg {...common}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 7v4M12 7v4M16 7v4M7 15h10" />
                </svg>
            )
        case 'shield':
            return (
                <svg {...common}>
                    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
                    <path d="m9.5 12 1.8 1.8L15 10" />
                </svg>
            )
        case 'ev':
            return (
                <svg {...common}>
                    <rect x="4" y="8" width="9" height="12" rx="1.5" />
                    <path d="M4 12h9M16 10v5a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9l-2-2M8.5 14l-1 2.5h2L8.5 19" />
                </svg>
            )
        case 'light':
            return (
                <svg {...common}>
                    <path d="M9 18h6M10 21h4" />
                    <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.4 1 2.5h6c0-1.1.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
                </svg>
            )
        case 'rewire':
            return (
                <svg {...common}>
                    <path d="M4 7c3 0 3 10 6 10s3-10 6-10M4 7a2 2 0 1 0 0-.001M20 17a2 2 0 1 0 0 .001" />
                </svg>
            )
        default:
            return null
    }
}
