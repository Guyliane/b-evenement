/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./thanks.html", "./mention.html", "testSlider.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        menu: "100px 1fr 100px",
      },
    },
  },
  plugins: [],
};
