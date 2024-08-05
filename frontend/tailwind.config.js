/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        "custom-diagonal": "polygon(0 0, 100% 0, 100% 100%, 0 60%)",
        "bottom-diagonal": "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
      },
      screens: {
        "md-xl": "900px",
        "extra-sm": "470px",
        "very-sm": "390px",
        "lg-1": "900px",
        "lg-2": "1160px",
        "lg-3": "1270px",
      },
      colors: {
        "cus-bg-dark-white": "#f4f2ee",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
      },
      textColor: {
        para: "#00000099",
        "icon-black": "#000000bf",
        "e6-color": "#000000e6",
      },
      keyframes: {
        squeezeUp: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        squeezeUp: "squeezeUp 5s linear",
      },
      textUnderlineOffset: {
        7: "7px",
      },
    },
  },
  plugins: [],
};
