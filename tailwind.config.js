/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue.js.ts'],
  theme: {
    extend: {
      colors: {
        'dodgeroll-gold': '#F79F1a',
        'apple-green': '#046e1b',
        'dire-wolf': '#292727',
      },
    },
    fontFamily: {
      NotoSansJp: 'Noto Sans JP',
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
