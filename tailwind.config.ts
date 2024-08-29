import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors:{
        yellowLight:"#feedbc",
        yellowDark:"#f9b800"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config