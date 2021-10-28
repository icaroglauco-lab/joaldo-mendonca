module.exports = {
  mode: 'jit',
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