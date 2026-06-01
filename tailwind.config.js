/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Paleta Institucional PUCP */
        'pucp-blue-dark': '#002D62',
        'pucp-blue-light': '#0072CE',
        'pucp-gray-dark': '#333333',
        'pucp-gray-light': '#F8FAFC',
        /* Mapeo de compatibilidad */
        primary: '#002D62',
        secondary: '#0072CE',
        accent: '#F8FAFC',
        dark: '#333333',
        light: '#FFFFFF',
        success: '#2D6A4F',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['"Roboto Slab"', 'Georgia', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}