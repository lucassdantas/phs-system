/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':'Inter, sans-serif'
    },
    extend: {
      colors:{
        "dark-blue-phs-system":"#003350",
        "medium-blue-phs-system":"#005284",
        "light-blue-phs-system":"#006DAF",
        "transparent-blue-phs-system":"#EBF3FF",
        "dark-green-phs-system":"#619712",
        "light-green-phs-system":"#BDFF62",
        "medium-green-phs-system":"#92C740",
        "gray-phs-system":"#6B6B6B",

      }
    },
  },
  plugins: [],
}

