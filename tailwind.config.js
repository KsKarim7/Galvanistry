module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        projectTheme: {
          primary: "#895061",
          secondary: "#78244C",
          accent: "#59253A",
          neutral: "#2D4159",
          "base-100": "#ffffff",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
