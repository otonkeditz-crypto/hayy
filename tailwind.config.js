/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
      },
      colors: {
        'cyber-dark': '#0D1117',
        'cyber-blue': '#1a202c',
        'neon-cyan': '#00FFFF',
        'neon-magenta': '#FF00FF',
        'neon-lime': '#39FF14',
        'cyber-gray': '#E0E0E0',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-lime': '0 0 20px rgba(57, 255, 20, 0.5)',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};