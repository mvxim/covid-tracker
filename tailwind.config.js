module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "valhalla": "hsla(232, 26%, 21%, 1.00)",
        "deep-carrot-orange": "hsla(21, 86%, 55%, 1.00)",
      },
      backgroundImage: {
        'loader': "url(./assets/loader.gif)",
      }
    },
  },
  plugins: [],
}
