/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: [
  //   // ...
  //   "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  // ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#04acb4",
        primaryDark: "#3c43bb",
        secondary: "#e32c1c",
        pudar: "#64748b",
      },
      screens: {
        "2xl": "1328px",
      },
    },
  },
  plugins: [],
  // plugins: [require("flowbite/plugin")],
};
