/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Deep navy, warmed slightly away from pure blue ─────── */
        navy: {
          DEFAULT: '#0B1628',
          light:   '#0F1C32',
          mid:     '#122238',
          card:    '#0E1A2F',
          border:  '#1B2C47',
          deep:    '#07101E',
          ink:     '#050B16',
        },
        /* ── Amber stays as signature accent, refined ──────────── */
        amber: {
          accent: '#F5A623',
          glow:   '#FFBA3E',
          soft:   '#FFE0A0',
          dim:    '#7A4E00',
          muted:  '#F5A62326',
          sand:   '#F0E4CE',
        },
        /* ── Cyan kept for backward compatibility, demoted ─────── */
        cyan: {
          accent: '#7FB3C7',
          glow:   '#9AC8D9',
          dim:    '#2A4A5A',
          muted:  '#7FB3C714',
          soft:   '#C5DDE8',
        },
        /* ── Warmer, paper-leaning text palette ────────────────── */
        text: {
          primary: '#FBF7EF',
          muted:   '#C3BFB5',
          dim:     '#7F8490',
          quiet:   '#50555F',
        },
        /* ── Paper tones for any light moments ─────────────────── */
        paper: {
          DEFAULT: '#F5F1E8',
          dim:     '#ECE6D7',
          ink:     '#1A1610',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body:    ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest-2': '-0.04em',
        'tightest-3': '-0.055em',
      },
      fontSize: {
        'display-xs': ['2.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display-sm': ['3.75rem', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        'display-md': ['5rem',    { lineHeight: '0.96', letterSpacing: '-0.045em' }],
        'display-lg': ['6.5rem',  { lineHeight: '0.94', letterSpacing: '-0.05em' }],
        'display-xl': ['8rem',    { lineHeight: '0.92', letterSpacing: '-0.055em' }],
      },
      backgroundImage: {
        'amber-line':    'linear-gradient(90deg, transparent 0%, rgba(245,166,35,0.45) 15%, rgba(245,166,35,0.45) 85%, transparent 100%)',
        'hairline':      'linear-gradient(90deg, transparent, rgba(251,247,239,0.12) 50%, transparent)',
        'hero-wash':     'radial-gradient(ellipse 100% 60% at 20% 0%, rgba(245,166,35,0.08) 0%, transparent 60%)',
        'card-warm':     'linear-gradient(160deg, rgba(245,166,35,0.03) 0%, rgba(11,22,40,0) 55%)',
      },
      boxShadow: {
        'amber-soft': '0 1px 0 rgba(245,166,35,0.25), 0 8px 24px -12px rgba(245,166,35,0.35)',
        'amber-press': '0 1px 0 rgba(245,166,35,0.4)',
        'card':       '0 1px 0 rgba(251,247,239,0.04), 0 24px 48px -24px rgba(0,0,0,0.5)',
        'card-lift':  '0 1px 0 rgba(245,166,35,0.2), 0 32px 60px -30px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'marquee':    'marquee 40s linear infinite',
        'hair-pulse': 'hairPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        hairPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
