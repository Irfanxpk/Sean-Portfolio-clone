/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ['"Times New Roman"', "serif"],
      },
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        accent: "#8892B0",
        dark: "#020c1b",
        light: "#ccd6f6",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
