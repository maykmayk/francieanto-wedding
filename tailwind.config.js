/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['custom', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cream: '#F8F6F0',
        sage: {
          light: '#9DAE88',
          DEFAULT: '#7D8E69',
          dark: '#5D6E49'
        },
        taupe: {
          light: '#C6B8AC',
          DEFAULT: '#B6A89C',
          dark: '#96887C'
        },
        charcoal: {
          light: '#555555',
          DEFAULT: '#333333',
          dark: '#222222'
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://via.placeholder.com/1920x1080?text=Francesca+e+Antonio')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
      }
    },
  },
  plugins: [],
}