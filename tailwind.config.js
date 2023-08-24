module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '2k': '2560px',
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "base-100": "#000000",
          "base-200": "#0394cc",
          "base-300": "#8cb9ca",
          "secondary": "#262626",
          "base-content": "#ffffff",

          "accent": "#0394cc"

        },
      },
    ],
  },
}

