/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tradecenter_red: "#BB2526",
        tradecenter_dark_blue: "#121F3B",
        tradecenter_text: "#223765",
        tradecenter_dark_red: "#180E0D",
        tradecenter_medium_red: "#400C0A",
        tradecenter_contact_red: "#E0312E",
        tradecenter_contact_white: "#FFF8F7",
      },
    },
  },
  plugins: [],
};
