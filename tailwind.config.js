/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#f5b32f",
    },
    extend: {
      fontFamily: {
        primary: "Poppins",
      },
    },
  },
  plugins: [],
};
