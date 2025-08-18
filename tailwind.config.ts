import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./pages/**/*.{vue,ts}",
    "./app.vue",
    "./plugins/**/*.ts"
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          to: { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
