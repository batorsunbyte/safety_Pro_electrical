'use client'

import { useState } from 'react'
import type { Faq as FaqItem } from '@/data/faqs'

export default function Faq({ faqs, heading = 'Frequently asked questions' }: { faqs: FaqItem[]; heading?: string }) {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <section className="section bg-white">
            <div className="container-x max-w-3xl">
                <div className="text-center">
                    <span className="eyebrow">Good to know</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">{heading}</h2>
                </div>

                <div className="mt-10 divide-y divide-navy-700/10 rounded-xl2 border border-navy-700/10 bg-white shadow-card">
                    {faqs.map((f, i) => {
                        const isOpen = open === i
                        return (
                            <div key={f.q}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="text-base font-semibold text-navy-900 sm:text-lg">{f.q}</span>
                                    <span
                                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan-deep transition-transform ${
                                            isOpen ? 'rotate-45' : ''
                                        }`}
                                    >
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`grid overflow-hidden px-5 transition-all duration-300 sm:px-6 ${
                                        isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-navy-700/80">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
