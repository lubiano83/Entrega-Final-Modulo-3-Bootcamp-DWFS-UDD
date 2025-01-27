module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1912px', // Breakpoint personalizado para resoluciones mayores a 1912px
      },
    },
  },
  plugins: [],
};