/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: "inset 0 0 4px 0 black",
        main1: "0 0 4px 0 black",
      },
    },
  },
  plugins: [],
};
