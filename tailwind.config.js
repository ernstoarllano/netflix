const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#010511"
        }
      },
      height: {
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-3/4": "75vh"
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-color-red-600": {
          scrollbarColor: "#dc2626 #dc2626"
        },
        ".bg-login": {
          backgroundImage: "url('/login.jpg')"
        }
      })
    })
  ],
}
