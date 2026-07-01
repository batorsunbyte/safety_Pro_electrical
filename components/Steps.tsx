import { SITE, CTA } from '@/lib/site'

const STEPS = [
    {
        n: '1',
        title: 'Call or request a quote',
        body: 'Tell us what you need — a quick call or the online form is all it takes. For emergencies, we pick up 24/7.',
    },
    {
        n: '2',
        title: 'Get an upfront price',
        body: 'We assess the job, explain your options in plain English and give you a clear, fair price before any work starts.',
    },
    {
        n: '3',
        title: 'Job done properly',
        body: 'Licensed work, completed on time and tidied up — finished with a Certificate of Electrical Safety for your peace of mind.',
    },
]

export default function Steps() {
    return (
        <section className="section bg-mist">
            <div className="container-x">
                <div className="max-w-2xl">
                    <span className="eyebrow">How it works</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl">Simple, from first call to finished job</h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {STEPS.map((s, i) => (
                        <div key={s.n} className="relative">
                            <div className="flex items-center gap-4">
                                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-lg font-bold text-white shadow-cta">
                                    {s.n}
                                </span>
                                {i < STEPS.length - 1 && (
                                    <span className="hidden h-px flex-1 bg-navy-700/15 md:block" />
                                )}
                            </div>
                            <h3 className="mt-5 text-xl">{s.title}</h3>
                            <p className="mt-2 text-navy-700/75">{s.body}</p>
                        </div>
                    ))}
                </div>

                {/* Ask at the moment the process feels easy */}
                <div className="card mt-12 flex flex-col items-center gap-4 p-6 text-center md:flex-row md:justify-between md:text-left">
                    <p className="text-lg font-semibold text-navy-900">
                        Step 1 takes two minutes — and most quotes come back within the hour.
                    </p>
                    <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
                        <a href={SITE.phoneHref} className="btn-call !px-4 !py-2.5 text-sm">
                            Call {SITE.phoneDisplay}
                        </a>
                        <a href="#quote" className="btn-ghost !px-4 !py-2.5 text-sm">
                            {CTA.quoteLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
