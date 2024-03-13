/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        borderAnime: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        appearCenter: {
          from: {
            opacity: 0,
            transform: "translateX(-50%) translateY(-50%) scale(0.9)",
          },
          to: {
            opacity: 1,
            transform: "translateX(-50%) translateY(-50%) scale(1)",
          },
        },
        appear: {
          from: {
            opacity: 0,
            transform: "scale(0.9)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        spin: "borderAnime 2.5s linear infinite",
        appearCenter: "appearCenter 250ms ease-out",
        appear: "appear 250ms ease-out",
      },
    },
  },
  plugins: [],
};
