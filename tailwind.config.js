/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22223b", // Gris minimalista
        secondary: "#2563eb", // Azul clásico
        accent: "#38bdf8", // Azul neón
        background: "#1a1a2e", // Fondo minimalista
        surface: "#2e2e3a", // Card minimalista
        text: "#e0e0e0", // Texto gris claro
        muted: "#6b7280", // Gris minimalista
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
