import Link from 'next/link'

export type Crumb = { name: string; path: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
                {items.map((c, i) => {
                    const last = i === items.length - 1
                    return (
                        <li key={c.path} className="flex items-center gap-1.5">
                            {last ? (
                                <span className="text-white/90">{c.name}</span>
                            ) : (
                                <>
                                    <Link href={c.path} className="hover:text-cyan-bright">
                                        {c.name}
                                    </Link>
                                    <span className="text-white/30">/</span>
                                </>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
