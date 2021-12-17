<script>


import Footer from "../componentes/footer.svelte";
import NavBar from '$lib/SplashingNav.svelte';

</script>

<NavBar/>

<slot/>

<Footer/>

<style>
  /* Write your global styles here, in PostCSS syntax */
  @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Lato:ital,wght@1,300&family=Noto+Sans:ital@0;1&family=Ruluko&display=swap');
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @font-face {
      font-family: "Futura Bold";
      src: url(/public/assets/unicode.futurab.ttf);
    }

    :global(body, html){
        background-color: white !important;
    }
</style>