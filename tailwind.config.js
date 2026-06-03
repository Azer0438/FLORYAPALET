export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        forest: {
          50: "#edf7f1",
          100: "#d7eadf",
          500: "#2f6b48",
          700: "#1e4a32",
          900: "#102219",
        },
        timber: {
          100: "#f7e2c5",
          300: "#d7a662",
          500: "#a76c32",
          700: "#70451f",
        },
        clay: "#b85038",
        paper: "#f7f3eb",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 34, 25, 0.14)",
      },
    },
  },
  plugins: [],
};
