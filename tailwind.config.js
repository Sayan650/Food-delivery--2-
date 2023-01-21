/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#92b6ae",
          "200": "#747373",
          "300": "#6d6d6d",
          "400": "#626161",
          "500": "#616060",
          "600": "#606060",
          "700": "#5c5c5c",
          "800": "#5a5858",
          "900": "#494949",
          "1000": "#373737",
        },
        black: "#000",
        gold: { "100": "#ffe600", "200": "#ffc114" },
      },
      fontFamily: { comfortaa: "Comfortaa", roboto: "Roboto", inter: "Inter" },
      borderRadius: { base: "20px" },
    },
    fontSize: { xs: "15px", sm: "20px", base: "24px", lg: "32px", xl: "64px" },
  },
  corePlugins: { preflight: false },
};
