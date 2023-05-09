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
      },
      colors: {
        'dark-leaf-green': '#435955',
        'dark-brown': '#73584b',
        'dark-blue-gray': '#4b6673',
        'light-leaf-green': '#4D982C',
        'light-coral': '#FF7F50',
        'dark-coral': '#FF6347',
      }
    }
  },
  plugins: [],
}

