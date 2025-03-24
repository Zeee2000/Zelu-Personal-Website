/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",    // Deep navy blue background
        secondary: "#8892b0",  // Muted blue-gray for secondary text
        tertiary: "#112240",   // Slightly lighter navy for cards
        "black-100": "#1a1f2e", // Darker shade for hover states
        "black-200": "#0a192f", // Same as primary for consistency
        "white-100": "#e6f1ff", // Light blue-white for text
        accent: "#64ffda",      // Bright cyan for accents
        "accent-hover": "#4cd8b2", // Slightly darker cyan for hover
      },
      boxShadow: {
        card: "0px 35px 120px -15px #112240",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
