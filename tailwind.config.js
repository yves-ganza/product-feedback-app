module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#F2F4FF',
        'secondary': '#F7F8FD',
        'blue': '#4661E6',
        'blue-hover': '#7C91F9',
        'pink': '#AD1FEA',
        'pink-hover': '#C75AF6',
        'inter-hover': "#CFD7FF",
      }),
      fontFamily: {
        primary: ['Jost'],
      }, 
      textColor: {
        'primary': '#3A4374',
        'secondary': '#647196',
        'blue': '#4661E6',
        'pink': '#AD1FEA',
        'orange': '#F49F85'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}