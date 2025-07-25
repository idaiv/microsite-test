/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a0e1a',
        }
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      }
    },
     fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // Change default for text-2xl
        '4xl': ['2.75rem', { lineHeight: '3rem' }], // Change default for text-4xl
        '5xl': ['3.5rem', { lineHeight: '4rem' }],
      },
  },
  plugins: [],
}