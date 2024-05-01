/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in-out 1s infinite',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0' },
          '10%': { opacity: '0.2' },
          '20%': { opacity: '0.4' },
          '30%': { opacity: '0.6' },
          '40%': { opacity: '0.8' },
          '50%': { opacity: '1.0' },
          '60%': { opacity: '0.8' },
          '70%': { opacity: '0.6' },
          '80%': { opacity: '0.4' },
          '90%': { opacity: '0.2' },
          '100%': { opacity: '0.0' },
          
        },
      },
    },
  },
  plugins: [],
}