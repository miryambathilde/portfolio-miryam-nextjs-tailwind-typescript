module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: 'class',
  theme: {
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
