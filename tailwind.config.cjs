module.exports = {
  darkMode: false,
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff914d',
        'secondary': '#004aad'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ]
}