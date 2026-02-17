/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tank-gray": "#636363",
        "tank-red": "#b53120", // Колір цегли
        "tank-yellow": "#e59a12", // Колір орла/жовтого танка
        "tank-black": "#000000",
      },
      fontFamily: {
        // Додаємо кастомну назву сімейства шрифтів
        pixel: ['"Press Start 2P"', "system-ui", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
