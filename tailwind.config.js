module.exports = {
    content: [
      './src/**/*.{html,js}', // Ajusta esto dependiendo de la estructura de tu proyecto
      './public/**/*.html',
      './**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },    
    plugins: [],
};