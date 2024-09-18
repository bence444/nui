/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/components/src/lib/**/*.{html,ts}',
    './projects/test-web/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      keyframes: {
        opacitymax : {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
}
