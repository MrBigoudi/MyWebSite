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
       'projects-canvas': "url('./src/assets/projects/canvas.png')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        '10xl': '10rem',
      },
      margin: {
        '128': '32rem',
      },
      colors: {
        'dark-leaf-green': '#435955',
        'dark-brown': '#73584b',
        'dark-blue-gray': '#4b6673',
        'light-leaf-green': '#4D982C',
        'light-coral': '#FF7F50',
        'dark-coral': '#FF6347',
        'darker-coral': '#ff4d2e',
        'light-gray': '#BCBCBC',
      },
      height: {
        '128': '32rem',
        '256': '64rem',
      }
    }
  },
  plugins: [],
  classes: {
    'inline-block': 'inline-block',
  },
}

