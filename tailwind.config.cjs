/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#a2d9ff',
      },
      backgroundImage: {
        'hero-pattern': "url('./public/assets/imgs/christian-wiediger-WkfDrhxDMC8-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
