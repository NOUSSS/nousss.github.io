/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.tsx"],
  theme: {
    fontFamily: {
      mns: "Fredoka",
    },

    extend: {
      colors: {
        main: "var(--mainColor)",
      },

      backgroundImage: {
        noise: "url(/noise-light.png)",
      },

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

        title: {
          "0%": {
            color: "white",
          },
          "50%": {
            color: "var(--mainColor)",
          },
          "100%": {
            color: "white",
          },
        },
      },

      animation: {
        spin: "borderAnime 2.5s linear infinite",

        appearCenter: "appearCenter 250ms ease-out",
        appear: "appear 250ms ease-out",

        title: "title 2.5s infinite",
      },
    },
  },

  plugins: [],
};
