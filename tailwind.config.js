/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#0B0D0F",
        gold: "#F6B91A",
        goldDark: "#D99500",
        cream: "#FAFAF7",
        line: "#E8E8E3",
        muted: "#70746F"
      },
      boxShadow: {
        premium: "0 18px 50px rgba(11,13,15,.10)",
        soft: "0 8px 30px rgba(11,13,15,.07)"
      }
    }
  },
  plugins: []
};