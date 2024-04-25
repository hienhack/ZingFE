/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['40px', '48px'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scale-up-image': {
          '0%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);',
          },
          '100%': {
            '-webkit-transform': 'scale(1.1);',
            transform: 'scale(1.1);',
          }
        },
        'scale-down-image': {
          '0%': {
            '-webkit-transform': 'scale(1.1);',
            transform: 'scale(1.1);',
          },
          '100%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);',
          }
        }
      },
      animation: {
        'scale-up-image': 'scale-up-image 0.5s cubic-bezier(0.250, 0.460 , 0.450, 0.940) both;',
        'scale-down-image': 'scale-down-image 0.5s cubic-bezier(0.250, 0.460 , 0.450, 0.940) both;'
      }
    },
  },
  plugins: [],

}
