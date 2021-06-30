module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* fonts sans + kaushan de google fonts */
    fontFamily: {
      /* sans: ["ui-sans-serif", "system-ui"], */
      kaushan: ["Kaushan Script"],
      lato: ["Lato"],
    },
    extend: {
      /* custome colores */
      colors: {
        green: {
          DEFAULT: '#34D399',
        },
        lightblue: {
          DEFAULT: '#77A1D3',
        },
        lightgreen: {
          DEFAULT: '#79CBCA',
        },
        lightpink: {
          DEFAULT: '#E684AE',
        }
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
