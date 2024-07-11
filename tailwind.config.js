/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A259FF",
        secondary: "#3B3B3B",
        background: "#2B2B2B",
        white: "#FFFFFF",
      },
      fontFamily: {
        "work-sans": "Work Sans",
        "space-mono": "Space Mono",
      },
      screens: {
        md: { min: "768px" },
        sm: { min: "834px" },
        lg: { min: "1024px" },
        ls: { min: "1280px" },
        xl: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
