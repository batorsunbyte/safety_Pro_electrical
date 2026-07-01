'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/data/services'
import { SUBURBS, ALSO_SERVICING } from '@/data/suburbs'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const SUBURB_OPTIONS = [...SUBURBS.map((s) => s.name), ...ALSO_SERVICING].sort()

export default function QuoteForm() {
    const [status, setStatus] = useState<Status>('idle')
    const [form, setForm] = useState({ name: '', phone: '', suburb: '', service: '', message: '' })

    const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [k]: e.target.value }))

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('sending')

        const summary = [
            `New quote request — ${SITE.name}`,
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            `Suburb: ${form.suburb || '—'}`,
            `Service: ${form.service || '—'}`,
            `Details: ${form.message || '—'}`,
        ].join('\n')

        // Preferred path: Web3Forms → emails Arif directly (set access key in Welle 4)
        if (SITE.formAccessKey) {
            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        access_key: SITE.formAccessKey,
                        subject: `Quote request from ${form.name} (${form.suburb})`,
                        from_name: SITE.name,
                        ...form,
                    }),
                })
                if (res.ok) {
                    setStatus('sent')
                    return
                }
                setStatus('error')
                return
            } catch {
                setStatus('error')
                return
            }
        }

        // Fallback (no backend yet): open WhatsApp with the details pre-filled
        window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(summary)}`, '_blank', 'noopener')
        setStatus('sent')
    }

    if (status === 'sent') {
        return (
            <div className="card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-safety-green/15 text-safety-green">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>
                <h3 className="mt-5 text-2xl">Thanks — request sent!</h3>
                <p className="mt-2 text-navy-700/75">
                    We&apos;ll get back to you shortly. Need it sorted now? Give Arif a call.
                </p>
                <a href={SITE.phoneHref} className="btn-call mt-6">
                    Call {SITE.phoneDisplay}
                </a>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
            <div className="grid gap-4">
                <Field label="Your name" required>
                    <input
                        type="text"
                        required
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
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="04XX XXX XXX"
                        className="input"
                    />
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

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full text-lg disabled:opacity-60">
                    {status === 'sending' ? 'Sending…' : SITE.formAccessKey ? 'Send my request' : 'Send via WhatsApp'}
                </button>

                {status === 'error' && (
                    <p className="text-center text-sm text-red-600">
                        Something went wrong — please call us on {SITE.phoneDisplay}.
                    </p>
                )}
                <p className="text-center text-xs text-navy-700/60">
                    Free quote · No obligation · We reply fast
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
