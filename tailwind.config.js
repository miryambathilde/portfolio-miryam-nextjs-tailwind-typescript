module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
      lato: ["Lato"],
    },

    boxShadow:{
      'custom-light': "0 0 10px #3C3838, 0 0 10px #444141",
      'custom-dark': "0px 0px 10px #2E3841, 0px 0px 10px #EFF1F8"
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
        },
        dark: {
          DEFAULT: '#1D1D1E',
          900: '#111827',
          800: '##1F2937',
          700: '##374151',
          600: '#4B5563',
        }
        
      }
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"],
    },
  },
  plugins: [],
};
