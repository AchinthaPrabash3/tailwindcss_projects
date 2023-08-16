/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        restuent: "url('/public/imges/img1.jpg')",
      },
      boxShadow: {
        "3xl": "0 -5px 50px -15px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        show: `@keyframes sh {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }`,
      },
    },
  },
  plugins: [],
};
