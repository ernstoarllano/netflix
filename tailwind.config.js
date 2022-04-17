module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#010511'
        }
      },
      height: {
        hero: '95vh'
      }
    },
  },
  plugins: [],
}
