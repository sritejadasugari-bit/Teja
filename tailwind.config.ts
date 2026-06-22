import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        ink: 'hsl(var(--text) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        stroke: 'hsl(var(--stroke) / <alpha-value>)',
        accent: {
          DEFAULT: '#7C3AED',
          cyan: '#06B6D4',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg,#89AACC 0%,#4E85BF 100%)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 60%)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(124,58,237,0.45)',
        'glow-cyan': '0 0 60px -10px rgba(6,182,212,0.4)',
        'glow-gold': '0 0 40px -8px rgba(212,175,55,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
