/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateSlowly: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'rotate-slowly': 'rotateSlowly 20s infinite linear', // Adjust 5s for your desired duration
      },
    },
    fontFamily: {
      headingfont:['Luckiest Guy'],
      subfont: ['Itim'],
    },
  },
  plugins: [],
}