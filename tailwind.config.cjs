module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'primaria': '#ff914d',
        'secundaria': '#004aad'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ]
}