import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9f6',
          100: '#e6f2ea',
          200: '#c9e3d0',
          300: '#9fceb0',
          400: '#6cae87',
          500: '#3b8e62',
          600: '#2c6f4d',
          700: '#23583e',
          800: '#1c4532',
          900: '#132c21'
        }
      }
    }
  },
  plugins: []
}
export default config