/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'], // Incluye tus archivos HTML
  theme: {
    extend: {
      screens: {
        custom: '1248px', // Breakpoint personalizado
      },
    },
  },
  plugins: [],
};