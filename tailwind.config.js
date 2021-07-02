module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        btn: '2px 2px 10px rgba(255, 255, 255, 0.829)',
      },
      backgroundColor: {
        'bg-main': '#F7F7F7',
        'input-main': '#5D92B7',
      },
      textColor: {
        'primary-blue': '#0F4B75',
        'light-blue': '#6F90A7',
      },
      borderColor: {
        'gray-2': '#F5F6F7',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      flex: {
        '0-23': '0 0 23%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
