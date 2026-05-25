/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        olive: {
          50: '#f6f7f1',
          100: '#e8ebdc',
          200: '#d2d8bd',
          500: '#7c8a58',
          600: '#667247',
          700: '#4f5a37',
          900: '#2f3722',
        },
        champagne: '#d7b879',
        linen: '#fbf7ef',
      },
      boxShadow: {
        premium: '0 24px 70px rgba(47, 55, 34, 0.12)',
        soft: '0 14px 35px rgba(47, 55, 34, 0.08)',
      },
    },
  },
  plugins: [],
}
