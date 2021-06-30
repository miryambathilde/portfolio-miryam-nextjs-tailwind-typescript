module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* fonts sans + kaushan de google fonts */
    fontFamily: {
      /* sans: ["ui-sans-serif", "system-ui"], */
      kaushan: ["Kaushan Script"],
    },
    extend: {
      /* custome colores */
      colors: {
        green: {
          DEFAULT: '#34D399',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
