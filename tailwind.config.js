/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 -5px 50px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
