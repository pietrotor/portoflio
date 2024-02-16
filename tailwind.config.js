/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['onest-variable', 'system-ui']
      },
      colors: {
        primary: {
          DEFAULT: '#141921',
          light: '#2D3748'
        },
        secondary: {
          DEFAULT: '#4299E1'
        },
        tertiary: {
          DEFAULT: '#a0aec0'
        }
      }
    }
  },
  plugins: []
}
