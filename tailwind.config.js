/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans"],
      },
      colors: {
        greenColor: "#60BB46",
        greenColorLight: "#69D34B",
        orangeColor: "#F27520",
        orangeColorLight: "#FFA438",
        greyColor: "#343A40",
        greyColorLight: "#6C757D",
        greyColorLighter: "#F8F9FA",
      },
    },
  },
  plugins: [],
};
