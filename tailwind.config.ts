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
      "dark_bg": "#252734"
    }
  },
  plugins: [],
}
export default config
