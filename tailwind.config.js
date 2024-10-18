/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-green-phs-system":"#619712",
        "green-phs-system":"#92C740",
        "light-green-phs-system":"#BDFF62",
        "blue-phs-system":"#005284",

      }
    },
  },
  plugins: [],
}

