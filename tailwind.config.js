module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '2k': '2560px',
      },
      colors: {
        "alfilo-gray": '#262626',
        "alfilo-blue": '#8cb9ca',
        "alfilo-dark-blue": '#0394cc',
        "discord": '#7289da',
      }
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
        // screens: {
        //   sm: "640px",
        //   md: "768px",
        //   lg: "1024px",
        //   xl: "1280px",
        //   "2xl": "1536px",
        // },
      },
    ],
  },
}

