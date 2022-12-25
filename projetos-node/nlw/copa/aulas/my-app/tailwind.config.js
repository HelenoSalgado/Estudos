/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/BG-effects.png)'
      },

      colors: {

        iginit: {
          500: '#129E57'
        },

        yellow: {
          500: '#F7DD43',
          700: '#DEC00C'

        },
        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#161618'
        }
      }
      
    },
  },
  plugins: [],
}
