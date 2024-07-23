/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      width: {
        '90': '90%',
        'container-shrink':'70%'
      },
      backgroundImage:{
        "hero":"url(./assets/hero.png)"
      },
      minHeight: {
        '600': '600px',
         '100%':'100%'
      },
      height:{
       '600':'600px',
       'customContentHero':'calc(100% - 32px)'
      },
      colors:{
        "layerBlack":"rgb(0 0 0 / 43%)",
        "grey":"#d9d9d9",
        "orange-c":'#FF7100',
        "grey1":"#4E4E4E",
      },
      boxShadow:{
        'book':"2px -6px 5px 3px rgba(0, 0, 0, 0.26)"
      }
    },
  },
  plugins: [],
}
