/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          400: '#E85A4F',
          500: '#D32F2F',
          600: '#C62828',
        },
        orange: {
          400: '#FF8A50',
          500: '#FF7043',
          600: '#F4511E',
        },
        peach: {
          300: '#FFAB91',
          400: '#FF8A65',
          500: '#FF7043',
        },
        golden: {
          400: '#FFD54F',
          500: '#FFC107',
          600: '#FF8F00',
        },
        sage: {
          400: '#AED581',
          500: '#8BC34A',
          600: '#689F38',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      }
    },
  },
  plugins: [],
};