/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        showcase: '#e5e0da',
        'scent-ink': '#1f1b18',
        'scent-muted': '#77716c',
        'rose-pill': '#d2939f',
        'rose-deep': '#bf7786',
        'sky-soft': '#9bc7df',
        coral: '#f28a5d',
        'blue-bottle': '#086bb5',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(78, 47, 37, 0.14)',
      },
    },
  },
  plugins: [],
}
