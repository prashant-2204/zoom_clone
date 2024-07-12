import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#000000', // Black
          2: '#0D0D0D', // Darker black
          3: '#1A1A1A', // Dark grayish black
          4: '#333333', // Dark gray
        },
        blue: {
          1: '#007BFF', // Bright blue
        },
        sky: {
          1: '#6C757D', // Dark sky blueish
          2: '#495057', // Gray sky blueish
          3: '#343A40', // Very dark sky blueish
        },
        orange: {
          1: '#FF69B4', // Pinkish orange
        },
        purple: {
          1: '#AF52DE', // Dark lavender
        },
        yellow: {
          1: '#999A2', // Bright yellow
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "bg-black",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
