const { fontFamily } = require('tailwindcss/defaultTheme');

// Colours are CSS variables (see globals.css) so light and dark themes share one set of classes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        ink: token('ink'),
        muted: token('muted'),
        faint: token('faint'),
        line: token('line'),
        accent: {
          DEFAULT: token('accent'),
          soft: token('accent-soft'),
        },
        edge: token('edge'),
      },
      // Hard, unblurred offset shadows (neo-brutalist accent), coloured by --edge-shadow.
      boxShadow: {
        'hard-sm': '2px 2px 0 rgb(var(--edge-shadow))',
        hard: '3px 3px 0 rgb(var(--edge-shadow))',
        'hard-lg': '5px 5px 0 rgb(var(--edge-shadow))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
