/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rainbow': '0 0 10px 2px rgba(255,0,0,0.5), 0 0 10px 2px rgba(255,165,0,0.5), 0 0 10px 2px rgba(255,255,0,0.5), 0 0 10px 2px rgba(0,128,0,0.5), 0 0 10px 2px rgba(0,0,255,0.5), 0 0 10px 2px rgba(75,0,130,0.5), 0 0 10px 2px rgba(238,130,238,0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
