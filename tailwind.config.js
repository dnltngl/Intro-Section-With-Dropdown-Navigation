/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        neutral: {
          AlmostWhite: "hsl(0, 0%, 98%)",
          MediumGray: "hsl(0, 0%, 41%)",
          AlmostBlack: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        Epilogue: [
          "Epilogue-VariableFont",
          "sans-serif",
        ], // Match with the font-family in @font-face
        EpilogueItalic: [
          "Epilogue-Italic-VariableFont",
          "sans-serif",
        ], // Match with the font-family in @font-face
      },
      screens: {
        xs: "375px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
