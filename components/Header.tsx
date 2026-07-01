'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE, CTA } from '@/lib/site'
import { Logo } from './Logo'

const NAV = [
    { label: 'Services', href: '/services/' },
    { label: 'Service Areas', href: '/service-areas/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    return (
        <>
            {/* Emergency strip */}
            <div className="bg-navy-900 text-white">
                <div className="container-x flex h-9 items-center justify-between text-[0.78rem] font-medium">
                    <span className="flex items-center gap-2">
                        <span className="hidden sm:inline text-cyan-bright">●</span>
                        24/7 Emergency Electrician · South-East Melbourne
                    </span>
                    <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-cyan-bright">
                        <PhoneIcon className="h-3.5 w-3.5" />
                        <span className="font-semibold">{SITE.phoneDisplay}</span>
                    </a>
                </div>
            </div>

            {/* Main bar */}
            <header
                className={`sticky top-0 z-50 border-b transition-all duration-200 ${
                    scrolled
                        ? 'border-navy-700/10 bg-white/90 shadow-card backdrop-blur'
                        : 'border-transparent bg-white'
                }`}
            >
                <div className="container-x flex h-[68px] items-center justify-between">
                    <Link href="/" aria-label={`${SITE.name} home`} onClick={() => setOpen(false)}>
                        <Logo />
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-semibold text-navy-700 transition-colors hover:text-cyan-deep"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <a href={SITE.phoneHref} className="btn-call !px-4 !py-2.5 text-sm">
                            <PhoneIcon className="h-4 w-4" />
                            {SITE.phoneDisplay}
                        </a>
                        <Link href={CTA.quoteHref} className="btn-ghost !px-5 !py-2.5 text-sm">
                            {CTA.quoteLabel}
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 lg:hidden"
                    >
                        <span className="sr-only">Menu</span>
                        {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile panel */}
                {open && (
                    <div className="lg:hidden">
                        <nav className="container-x flex flex-col gap-1 border-t border-navy-700/10 pb-6 pt-3">
                            {NAV.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-3 text-base font-semibold text-navy-800 hover:bg-mist"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-3 grid grid-cols-1 gap-2.5">
                                <a href={SITE.phoneHref} className="btn-call w-full">
                                    <PhoneIcon className="h-5 w-5" />
                                    {CTA.callLabel}
                                </a>
                                <Link href={CTA.quoteHref} onClick={() => setOpen(false)} className="btn-primary w-full">
                                    {CTA.quoteLabel}
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
        </svg>
    )
}
function MenuIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    )
}
function CloseIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
        </svg>
    )
}
