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
        },
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-400px);',
            transform: 'translateX(-400px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-out-right': {
          '0%': {
            '-webkit-transform': ' translateX(0);',
            transform: 'translateX(0);',
            opacity: '1;'
          },
          '100%': {
            '-webkit-transform': 'translateX(400px);',
            transform: 'translateX(400px);',
            opacity: '0;'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(400px);',
            transform: 'translateX(400px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(400px);',
            transform: 'translateX(400px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        }
      },
      colors: {
        'main-100': '#393243',
        'main-200': '#231b2e',
        'main-300': '#170f23',
        'main-400': '#130c1c',
        'main-500': '#9b4de0',
        'main-600': '#5e4ce6',
        'text-100': '#fff',
        'text-200': '#807c87',
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
        'rotate-center-pause': {
          '0%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);',
            'border-radius': '99999px'
          },
          '100%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);'
          }
        },
        'scale-up-center': {
          '0%': {
            '-webkit-transform': 'scale(0);',
            transform: 'scale(0);',
          },
          '100%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);'
          }
        },
        'scale-up-image': {
          '0%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);',
          },
          '100%': {
            '-webkit-transform': 'scale(1.2);',
            transform: 'scale(1.2);'
          }
        },
        'scale-down-image': {
          '0%': {
            '-webkit-transform': 'scale(1.2);',
            transform: 'scale(1.2);',
          },
          '100%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 8s linear infinite;',
        'rotate-center-pause': 'rotate-center-pause 0.3s linear 2 both;',
        'scale-up-center': 'scale-up-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'scale-up-image': 'scale-up-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'scale-down-image': 'scale-down-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
      },
      flex: {
        '4': '4 4 0%',
        '6': '6 6 0%',
        '3': '3 3 0%',
        '7': '7 7 0%',
        '5': '5 5 0%',
      }
    },
  },
  plugins: [],

}
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }