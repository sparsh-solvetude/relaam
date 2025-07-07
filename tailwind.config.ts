import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        ranade: ['Ranade', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        orange: "#C36247",
        gray: "#C3C3C3",
        'gray-2': "#E6E1DC",
        dark: "#1E1E1E",
        "dark-2": "#2C2C2C",
      },  
      lineHeight: {
        'base': '1.1',
      },
    },
  },
  plugins: [],
};
export default config;
