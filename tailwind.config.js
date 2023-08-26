module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        "xxs": "320px",
        "xs": "430px",
      },
      colors: {
        "alfilo-gray": '#262626',
        "alfilo-blue": '#8cb9ca',
        "alfilo-dark-blue": '#0394cc',
        "discord": '#7289da',
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

