/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': '#393E46',
      'secondary': '#222831',
      'primary': '#00ADB5',
      'text': '#EEEEEE',
      'textSecondary': '#d9d9d9',
      'white': 'white'
    },
    extend: {

    },
  },
  plugins: [],
};
