import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['var(--figtree)', ...defaultTheme.fontFamily.sans],
        // serif: ['var(--newsreader)', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.2, -0.25, 0, 1.6)',
      },
      keyframes: {
        fade: {
          from: {
            opacity: '0%',
          },
          to: {
            opacity: '100%',
          },
        },

        scaleFade: {
          from: {
            opacity: '0%',
            transform: 'scale(0.75)',
          },
          to: {
            opacity: '100%',
            transform: 'scale(1)',
          },
        },

        reveal: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px)',
          },
        },

        rotate: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px) rotate(6deg)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px) rotate(0deg)',
          },
        },

        rotateAlt: {
          from: {
            opacity: '0%',
            transform: 'translateY(40px) rotate(-6deg)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0px) rotate(0deg)',
          },
        },
      },
      animation: {
        fadeXs: 'fade 0.2s forwards',
        fadeSm: 'fade 0.4s forwards',
        fade: 'fade 0.8s forwards',
        fadeMd: 'fade 2s forwards',

        scaleFade: 'scaleFade 0.4s cubic-bezier(0.7,0,0.5,2) forwards',

        revealSm: 'reveal 0.8s cubic-bezier(0.5,-0.2,0.1,1.2) forwards',
        reveal: 'reveal 1.2s cubic-bezier(0.5,-0.2,0.1,1.3) forwards',
        revealMd: 'reveal 1.4s cubic-bezier(0.5,-0.2,0.1,1.4) forwards',
        revealLg: 'reveal 1.6s cubic-bezier(0.5,-0.2,0.1,1.5) forwards',

        rotate: 'rotate 1s cubic-bezier(0.5,-0.5,0.1,1.8) forwards',
        rotateAlt: 'rotateAlt 1s cubic-bezier(0.5,1,0.1,1.8) forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
