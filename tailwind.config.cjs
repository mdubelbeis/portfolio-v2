/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#a2d9ff',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/imgs/christian-wiediger-WkfDrhxDMC8-unsplash.jpg')",
        'blue-smoke': "url('/assets/imgs/pawel-czerwinski-YWIOwHvRBvU-unsplash.jpg')",
        'blue-abstraction': "url('/assets/imgs/max-kleinen-ohQinqTl_DE-unsplash.jpg')",
      },
      fontFamily: {
        'hero-text': ['Antonio', 'sans-serif'],
        'hero-title': ['Satisfy', 'cursive'],
        cursive: ['Galada', 'cursive'],
      },
    },
  },
  plugins: [],
};
