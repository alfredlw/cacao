/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        dosis:['Dosis', 'sans-serif'],
        lato:['Lato', 'sans-serif']
      },
      colors:{
        tech:"#00A2A5",
        primary:"#875F42",
        zoom:"#2D8CFF",
        whatsapp:"#128C7E",
        gmail:"#EA4335",
        faqs:"#FBBC04"
      },
      zIndex: {
        '60': '60',
      }
    },
  },
  plugins: [],
}
