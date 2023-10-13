/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shades-100": "#fafafa",
        "shades-200": "#f5f5f5",
        "primary-main": "#70259b",
        "primary-active": "#d100c9",
        "shades-white": "#fff",
        "shades-700": "#242424",
        "primary-dark": "#430964",
      },
      spacing: {},
      fontFamily: {
        'body': 'Inter',
        "body-bold-14": "Inter",
        "subtitle-is-5": "Inter",
        "subtitle-is-4": "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      "21xl": "2.5rem",
      "29xl": "3rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
}

