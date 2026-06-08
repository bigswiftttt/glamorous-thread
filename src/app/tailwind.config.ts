import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#C6A85A',
                    light: '#E6D3A3',
                    dark: '#A8893A',
                },
                cream: '#FAF8F3',
                ink: '#0B0B0B',
                text: '#111111',
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
                sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                widest: '0.25em',
                'extra-wide': '0.15em',
            },
        },
    },
    plugins: [],
}

export default config