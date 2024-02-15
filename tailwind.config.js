/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter, sans-serif"
    },
    container: {
      padding: {
        sm: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1230px",
    },
    extend: {
      colors: {
        primary: "#21212D",
        secondary: "#2C2C38",
      },
      boxShadow: {
        shade:
          "0px 4px 30px rgba(255, 255, 255, 0.2), 0px 4px 30px rgba(0, 0, 0, 0.08)",
        task:"3px 3px 10px #4444dd",
      },
    },
  },
  plugins: [],
};
