/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#111',
        'primary-2': '#222',
        'primary-3': '#333',
        'grey-dark': '#999',
        'grey-light': '#ccc',
        'lapis-lazuli': '#26619C',
        'aegean-blue': '#2b8ead',
        'wine-red': '#8a3a3a',
        'terracotta': '#d98840',
        'golden-olive': '#c5b358',
        'herbal-green': '#7aa95d',
        'marble-white': '#ededed',
        'light': '#eeffee'
      },
    },
  },
  plugins: [],
}
