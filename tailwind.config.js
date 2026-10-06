/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "!./src/components/LearningSection/**"],
  theme: {
    extend: {
      colors: {
        ink: "#211b36",
        violet: {
          50: "#f5f1ff",
          100: "#ebe4ff",
          200: "#d8caff",
          500: "#7952df",
          600: "#6840cf",
          700: "#5230ad",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 50px rgba(48, 35, 92, 0.08)",
      },
    },
  },
  plugins: [],
};
