/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "transparent": "transparent",
      "primary": "#2C63F1",
      "black": "#060A12",
      "container": "#F1F3FA",
      "background": "#FAFBFF",
    }
  },
  plugins: [],
}

