module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff914d',
        'secondary': '#004aad'
      }
    },
    fontFamily:{
      'hero': ["Lato"],
      'header': ["Ruluko"],
      'body': ['"Noto Sans"']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ]
}