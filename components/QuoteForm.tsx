'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { SUBURBS, ALSO_SERVICING } from '@/data/suburbs'

type Status = 'idle' | 'sending' | 'sent' | 'whatsapp' | 'error'

const SUBURB_OPTIONS = [...SUBURBS.map((s) => s.name), ...ALSO_SERVICING].sort()

export default function QuoteForm({
    defaultService = '',
    defaultSuburb = '',
}: {
    defaultService?: string
    defaultSuburb?: string
}) {
    const [status, setStatus] = useState<Status>('idle')
    const [hp, setHp] = useState('') // honeypot
    const [form, setForm] = useState({
        name: '',
        phone: '',
        suburb: defaultSuburb,
        service: defaultService,
        message: '',
    })

    const update =
        (k: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setForm((f) => ({ ...f, [k]: e.target.value }))

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (hp) {
            // bot filled the hidden field — silently drop
            setStatus('sent')
            return
        }
        setStatus('sending')

        const summary = [
            `New quote request — ${SITE.name}`,
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            `Suburb: ${form.suburb || '—'}`,
            `Service: ${form.service || '—'}`,
            `Details: ${form.message || '—'}`,
        ].join('\n')

        // Preferred path: Web3Forms → emails Arif directly (set access key to enable)
        if (SITE.formAccessKey) {
            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        access_key: SITE.formAccessKey,
                        subject: `Quote request from ${form.name} (${form.suburb || 'SE Melbourne'})`,
                        from_name: SITE.name,
                        botcheck: false,
                        ...form,
                    }),
                })
                setStatus(res.ok ? 'sent' : 'error')
            } catch {
                setStatus('error')
            }
            return
        }

        // Fallback (no key yet): open WhatsApp with details pre-filled.
        // NOTE: no 'noopener' feature string — window.open(..., 'noopener') returns null
        // by spec even on success, which would falsely report an error. We null the
        // opener manually instead; null here genuinely means the popup was blocked.
        const win = window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(summary)}`, '_blank')
        if (win) win.opener = null
        setStatus(win ? 'whatsapp' : 'error')
    }

    if (status === 'sent' || status === 'whatsapp') {
        const viaWhatsapp = status === 'whatsapp'
        return (
            <div className="card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-safety-green/15 text-safety-green">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>
                <h3 className="mt-5 text-2xl">
                    {viaWhatsapp ? 'Almost done!' : 'Thanks — request sent!'}
                </h3>
                <p className="mt-2 text-navy-700/75">
                    {viaWhatsapp
                        ? 'Tap Send in the WhatsApp window to deliver your request. '
                        : `${SITE.responsePromise}. `}
                    Need it sorted now? Give Arif a call.
                </p>
                <a href={SITE.phoneHref} className="btn-call mt-6">
                    Call {SITE.phoneDisplay}
                </a>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
            {/* Trust row — reassurance at the point of submission */}
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-navy-700/10 pb-4 text-sm">
                <span className="flex text-cyan-deep" aria-label={`${SITE.rating.value} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                        </svg>
                    ))}
                </span>
                <span className="font-semibold text-navy-900">
                    {SITE.rating.value}★ from {SITE.rating.count} reviews
                </span>
                <span className="text-navy-700/60">· Licensed A-Grade · Fully insured</span>
            </div>

            <div className="grid gap-4">
                <Field label="Your name" required>
                    <input
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="e.g. Sarah"
                        className="input"
                    />
                </Field>

                <Field label="Phone number" required>
                    <input
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="04XX XXX XXX"
                        className="input"
                    />
                    <span className="mt-1.5 block text-xs text-navy-700/60">
                        We&apos;ll only use this to quote your job — no spam.
                    </span>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Suburb">
                        <select value={form.suburb} onChange={update('suburb')} className="input">
                            <option value="">Select suburb…</option>
                            {SUBURB_OPTIONS.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                            <option value="Other">Other</option>
                        </select>
                    </Field>

                    <Field label="What do you need?">
                        <select value={form.service} onChange={update('service')} className="input">
                            <option value="">Select service…</option>
                            {SERVICES.map((s) => (
                                <option key={s.slug} value={s.title}>
                                    {s.title}
                                </option>
                            ))}
                            <option value="Not sure">Not sure / other</option>
                        </select>
                    </Field>
                </div>

                <Field label="Job details (optional)">
                    <textarea
                        value={form.message}
                        onChange={update('message')}
                        rows={3}
                        placeholder="Tell us a little about the job…"
                        className="input resize-none"
                    />
                </Field>

                {/* Honeypot — hidden from humans, catches bots */}
                <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                />

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full text-lg disabled:opacity-60">
                    {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
                </button>

                {status === 'error' && (
                    <p className="text-center text-sm font-medium text-red-600">
                        Sorry — that didn&apos;t go through. Please call us on{' '}
                        <a href={SITE.phoneHref} className="underline">
                            {SITE.phoneDisplay}
                        </a>
                        .
                    </p>
                )}
                <p className="text-center text-sm text-navy-700/70">
                    Free quote · No obligation · {SITE.responsePromise}
                </p>
            </div>
        </form>
    )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                {label} {required && <span className="text-cyan-deep">*</span>}
            </span>
            {children}
        </label>
    )
}
