/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Japandi Color Palette
        'japandi': {
          'white': '#FAFAF8',
          'cream': '#F5F1EB',
          'beige': '#E8E0D5',
          'sand': '#D4C4B0',
          'taupe': '#B8A99A',
          'warm-gray': '#9A8B7A',
          'charcoal': '#4A4A4A',
          'black': '#2C2C2C',
          'sage': '#8B9A7D',
          'sage-light': '#A8B899',
          'sage-dark': '#6B7A5D',
          'terracotta': '#C9A689',
          'terracotta-light': '#D4B896',
          'stone': '#C4B5A0',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
