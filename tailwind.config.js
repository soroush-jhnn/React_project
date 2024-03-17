module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily:{
      
    },
    
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '60%': '60%',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {

      colors:
      {
        'link-color': '#f4f4f4',
        'my-text-color': '#050E40',
        'my-button-color': '#3DD9C9',
        'my-blue-color': '#41ABC5',
        'my-light-blue-color': '#B3E9F3',
        'my-yellow-color': '#F2D98D',
        'my-pink-color': '#F280DF',
        'my-teal-color': '#3DD9C9',
        'my-gray-color': '#F2F2F2',

      },

      backgroundImage: theme => ({
        'borderSvg': "url('D:/download/REACT PROJECT/Bahr-Test1/src/assets/images/svg/Rectangle 10.svg')",
      })
    },
  },
  plugins: [
  ],
}