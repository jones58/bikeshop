/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Univers: ["Univers"],
        UniversBold: ["Univers-Bold"],
      },
    },
  },
  plugins: [],
};
