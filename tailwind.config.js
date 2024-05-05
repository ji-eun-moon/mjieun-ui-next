/** @type {import('tailwindcss').Config} */

import { toneMap } from "@nextcss/color-tools";

function generateColors(color) {
  return {
    DEFAULT: color,
    ...toneMap(color),
  };
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...generateColors("#007bff"),
        },
        danger: {
          ...generateColors("#dc3545"),
        },
        secondary: {
          ...generateColors("#6c757d"),
        },
        success: {
          ...generateColors("#28a745"),
        },
        warning: {
          ...generateColors("#ffc107"),
        },
        info: {
          ...generateColors("#17a2b8"),
        },
        light: {
          ...generateColors("#f8f9fa"),
        },
        dark: {
          ...generateColors("#343a40"),
        },
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};
