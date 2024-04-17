/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-main-desktop':"url('src/images/bg-card-front.png')"
      }
    },
    fontFamily:{
      'gro':["Space Grotesk"],
    },
  },
  plugins: [],
}