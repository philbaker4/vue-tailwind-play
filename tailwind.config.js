const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      indBlue: "#003263",
      indRed: "#CE1126",
      ...colors
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
