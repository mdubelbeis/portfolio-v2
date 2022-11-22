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
        code: "url('public/assets/imgs/ilya-pavlov-OqtafYT5kTw-unsplash.jpg')",
        'blue-abstraction': "url('/assets/imgs/max-kleinen-ohQinqTl_DE-unsplash.jpg')",
        'blue-reaction': "url('/assets/imgs/engin-akyurt-8eLBp2xo68c-unsplash.jpg')",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
