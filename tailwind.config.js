export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B3A2C', // Deep Rust/Red
          beige: '#F5F5DC', // Warm Beige
          dark: '#2C1810', // Dark Brown
          gold: '#DAA520', // Gold Accent
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
