/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins',sans-serif",
        'Inter': "'Inter',sans-serif",
      },
      colors: {
        orange: "#F77B0B",
        purple: "#9800B0",
        blue: "#003E92",
        gradient1: "linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)",
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
        padding: {
          DEFAULT: "12px",
        },
      },
      boxShadow: {
        "3xl": "0px 2px 48px 0px #00000014",
        "4xl": "0px 0px 25px 0px #FFFFF",
      },
      backgroundImage: {
        "gradient-to-custom": "linear-gradient(107.9deg, #0c5fd1 1.25%, #8703c5 93.71%)",
        "hero_section_bg": "url(../src/assets/webp/Hero-bg.webp)",
        "blue_cards_bg": "url(./assets/webp/blue-cards.webp)",
        "targetgroup_bg": "url(./assets/webp/ring-bg.webp)",
        "findout_bg": "url(./assets/webp/FindOut.webp)",
        "non_binding_bg": "url(./assets/webp/Binding-bg.webp)",
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient": {
          borderImageSlice: "10 !important",
          borderImageSource:
            "linear-gradient(107.9deg, #0c5fd1 1.25%, #8703c5 93.71%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
}

