/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'dungeon-dark': '#1a0f0a',
        'dungeon-brown': '#2c1810',
        'wood': '#6b4423',
        'gold': '#ffd700',
        'silver': '#c0c0c0',
        'parchment': '#f5f5dc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
