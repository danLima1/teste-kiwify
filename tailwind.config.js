/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cyan-450': '#00B2BD',
        'gray-250': '#EEEEEE',
        'neutral-450':'#898989',
      },
    },
  },
  plugins: [],
}
