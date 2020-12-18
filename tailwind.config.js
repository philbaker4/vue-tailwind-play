const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: colors.violet
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
