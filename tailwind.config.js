/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand — from the Safety Pro Electrical business card
                navy: {
                    950: '#070d18',
                    900: '#0a1220',
                    800: '#101b2d',
                    700: '#17243b',
                    600: '#20304d',
                },
                cyan: {
                    DEFAULT: '#16a6e6',
                    bright: '#35c0f5',
                    deep: '#0d84bd',
                },
                safety: {
                    // used sparingly for "verified / compliant" ticks
                    green: '#28c76f',
                },
                ink: '#0f1b2d',
                mist: '#f5f8fc',
            },
            fontFamily: {
                sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
                display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                card: '0 1px 2px rgba(15,27,45,0.04), 0 8px 24px rgba(15,27,45,0.08)',
                cta: '0 8px 24px rgba(22,166,230,0.35)',
                lift: '0 20px 50px rgba(10,18,32,0.18)',
            },
            borderRadius: {
                xl2: '1.25rem',
            },
            maxWidth: {
                container: '1200px',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-ring': {
                    '0%': { boxShadow: '0 0 0 0 rgba(22,166,230,0.45)' },
                    '70%': { boxShadow: '0 0 0 12px rgba(22,166,230,0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(22,166,230,0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out both',
                'pulse-ring': 'pulse-ring 2s infinite',
            },
        },
    },
    plugins: [],
}
