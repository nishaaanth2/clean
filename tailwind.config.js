/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Configure your color palette here
        'mwgreen':'#a59b6d',
        'mwwhite':'#e0ded1',
        'mwblack':'#1f1f1f',
        'mwgray':'#6d6d6d',
  
      },
      fontSize: {
        '4-5xl': ['2.6rem','3rem'],
      }
    },
  },
  plugins: [],
};
