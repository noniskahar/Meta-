/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        seagreen: "#005b33",
        goldenrod: "#fabb3d",
        dimgray: "#5c5c5c",
        silver: "#c3b2a5",
      },
      fontFamily: {
        barlow: "Barlow",
        "barlow-condensed": "'Barlow Condensed'",
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
      borderRadius: { small: "23px", base: "25px" },
    },
    fontSize: { sm: "14px", base: "16px", lg: "18px", xl: "20px" },
  },
  corePlugins: { preflight: false },
};
