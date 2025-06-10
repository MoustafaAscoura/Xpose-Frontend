/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        xpose: {
          dark: "#0A0E17",
          darker: "#050A14",
          blue: "#00CCFF",
          green: "#02FCB9",
          lightblue: "#4DDBFF",
          purple: "#6E3AFF",
          teal: "#00FFD1",
          card: "#111827",
          text: {
            primary: "#FFFFFF",
            secondary: "#A0AEC0",
            accent: "#00CCFF",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('../src/assets/brain-network.jpg')",
      },
      fontSize: {
        "section-title": [
          "32px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
        "section-title-xl": [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
