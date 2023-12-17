// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "mochiy-pop": ["Mochiy Pop One", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        customYellow: "#FFDE59",
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
