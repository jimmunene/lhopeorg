/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0284c7',
          secondary: '#0ea5e9',
          accent: '#38bdf8',
          dark: '#0c4a6e',
          light: '#e0f2fe',
        },
      },
    },
  },
  plugins: [],
};
