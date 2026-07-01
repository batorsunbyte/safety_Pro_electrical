import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { SUBURBS } from '@/data/suburbs'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = SITE.url
    const staticPaths = ['/', '/services/', '/service-areas/', '/reviews/', '/about/', '/contact/']

    return [
        ...staticPaths.map((p) => ({
            url: `${base}${p}`,
            changeFrequency: 'monthly' as const,
            priority: p === '/' ? 1 : 0.8,
        })),
        ...SERVICES.map((s) => ({
            url: `${base}/services/${s.slug}/`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...SUBURBS.map((s) => ({
            url: `${base}/service-areas/${s.slug}/`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ]
}
