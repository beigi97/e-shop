/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#F9F9F9",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
