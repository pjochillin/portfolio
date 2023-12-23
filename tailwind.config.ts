import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'theme_green': "#31DC58",
      "off_white": "#d4d4d4",
      "black": "#000000",
      "dark_bg": "#252734",
      "secondary_white": "#e9e9eb",
      "theme_gray": "#9c9ca3",
      "theme_lightgray": "#424657",
      "dropdown_bg": "#484c63",
      'black-rgba': 'rgba(0, 0, 0, 0.75)',
    },
    extend: {
      animation: {
        blob: "blob 60s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "20%": {
            transform: "translate(10px, -80px) scale(1.2)",
          },
          "30%": {
            transform: "translate(-30px, 0px) scale(1.0)",
          },
          "40%": {
            transform: "translate(-40px, 20px) scale(0.8)",
          },
          "50%": {
            transform: "translate(0px, -30px) scale(1.0)",
          },
          "60%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "70%": {
            transform: "translate(0px, 0px) scale(1.5)",
          },
          "80%": {
            transform: "translate(20px, -10px) scale(0.6)",
          },
          "90%": {
            transform: "translate(-30px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
