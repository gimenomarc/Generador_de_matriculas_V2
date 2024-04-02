/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class', // Esto habilita el soporte del modo oscuro
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',
        'dark': '#1f2937',
        'menu-light': '#f3f4f6',
        'menu-dark': '#2d3748'
      },
    },
  },
  plugins: [],
}

