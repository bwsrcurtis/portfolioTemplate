/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'text': '#000000',
      'primary': '#94a8b3',
      'background': '#bababa',
      'secondary': '#dedcde',
      'tertiary': '#dcd3c9',

    },
    extend: {

    },
  },
  plugins: [],
};
