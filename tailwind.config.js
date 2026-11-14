/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['foundersGrotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        foundersGrotesk: ['foundersGrotesk', 'sans-serif'],
      },
      colors: {
        monie: {
          blue: '#0357EE',
          darkBlue: '#061333',
          yellow: '#FEE17F',
          cream: '#FFF4D1',
          lightBlue: '#EBF8FD',
          hoverBlue: '#0441A3',
          inputBg: '#18284D',
          inputPlaceholder: '#425480',
        }
      },
      animation: {
        'rotate-outer': 'rotateOuter 30s linear infinite',
      },
      keyframes: {
        rotateOuter: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        counterRotateOuter: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
