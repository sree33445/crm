const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|input|listbox|navbar|select|ripple|spinner|menu|divider|popover|scroll-shadow).js",
  ],
  theme: {
    extend: {
      colors: {
        "black-dark": "#00000050",
        "dull-white": "#FFFFFFB3",
        "white-light": "#FFFFFF30",
        "white-medium": "#FFFFFF40",
        "neon-blue": "#2FB8FF",
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [nextui()],
};
