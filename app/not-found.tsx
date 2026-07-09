import Link from 'next/link'
import { SITE } from '@/lib/site'
import HeroCircuits from '@/components/HeroCircuits'

export default function NotFound() {
    return (
        <section className="grid-glow relative isolate overflow-hidden bg-navy-900 text-white">
            <HeroCircuits />
            <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
                <p className="font-display text-7xl font-bold text-cyan-bright">404</p>
                <h1 className="mt-4 text-3xl text-white sm:text-4xl">Looks like a blown fuse.</h1>
                <p className="mt-3 max-w-md text-white/70">
                    That page doesn&apos;t exist. But your electrical problem is easy to sort — call us
                    or head back to the home page.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={SITE.phoneHref} className="btn-call">
                        Call {SITE.phoneDisplay}
                    </a>
                    <Link href="/" className="btn-ghost-light">
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    )
}
