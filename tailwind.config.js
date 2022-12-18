/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "login-yellow": "#E6E18B",
      },
    },
  },
  plugins: [],
};
