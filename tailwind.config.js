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
    extend: {},
  },
  plugins: [],
};
