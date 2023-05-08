/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       'japanese-city': "url('./src/assets/background.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}

