/**
 * Subtle "electric current" animation for the hero background.
 * Faint circuit traces with bright cyan pulses travelling along them.
 * Pure SVG + CSS — zero JS, negligible weight, freezes under prefers-reduced-motion.
 */

// Circuit-board style traces (right-angle bends). Pulses reuse the same paths.
const TRACES = [
    'M-40 90 H280 L340 150 H720 L780 96 H1480',
    'M-40 250 H180 L240 200 H560 L620 250 H900 L960 210 H1480',
    'M-40 420 H360 L420 470 H860 L920 420 H1480',
    'M-40 540 H240 L300 500 H680 L740 540 H1480',
]

// Little solder nodes for texture
const NODES = [
    [280, 90],
    [720, 150],
    [560, 200],
    [900, 250],
    [360, 420],
    [860, 470],
    [680, 540],
]

export default function HeroCircuits() {
    return (
        <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            <defs>
                <filter id="speGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" />
                </filter>
            </defs>

            {/* faint static traces */}
            <g fill="none" stroke="#35c0f5" strokeWidth="1.5" opacity="0.1">
                {TRACES.map((d, i) => (
                    <path key={i} d={d} />
                ))}
                {NODES.map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#35c0f5" stroke="none" />
                ))}
            </g>

            {/* travelling current pulses */}
            <g fill="none" stroke="#8fe6ff" strokeWidth="2" strokeLinecap="round" filter="url(#speGlow)">
                {TRACES.map((d, i) => (
                    <path
                        key={i}
                        d={d}
                        className="spe-pulse"
                        style={{ animationDelay: `${i * -1.3}s`, animationDuration: `${5 + i}s` }}
                    />
                ))}
            </g>
        </svg>
    )
}
