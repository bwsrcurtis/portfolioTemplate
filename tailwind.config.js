/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'text': '#000000',
      'background': '#bababa',
      'primary': '#94a8b3',
      'secondary': '#dcd3c9',
      'tertiary': '#dedcde',

      'darkText': '#ffffff',
      'darkBackground': '#2e3440',
      'darkPrimary': '#8c6a57',
      'darkSecondary': '#42648a',
      'darkTertiary': '#7b8f7b',

    },
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
};
