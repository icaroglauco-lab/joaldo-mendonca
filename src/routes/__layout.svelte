<script>

import "../app.css";

import DropdownNav from "../componentes/dropdownNav.svelte";
import Footer from "../componentes/footer.svelte";

</script>

<DropdownNav>


<div class="absolute sticky navbar mb-2 bg-transparent text-neutral-content justify-between mt-8 shadow-lg 
  w-full

  grid
  h-auto
" style="
  position: sticky;
  top: 0;
  z-index: 30;
  background: #f0f8ff91;
  ">
    <div class="flex-none ml-10 relative">
      <img src="/logo.png" id="logo" on:click={() => window.location = "/"} class="cursor-pointer w-40 sm:ml-20 -mb-20" alt="Logo">
      <svg id="l1" xmlns="http://www.w3.org/2000/svg" width="390" height="11" fill="none" viewBox="0 0 390 11">
        <path fill="#FF914D" d="M0 0h350v3.3H0zM40 7.7h350V11H40z"></path>
      </svg>     
    </div> 

    
  </div>

  
<slot>

<Footer>

<style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Noto+Sans:ital@0;1&family=Ruluko&display=swap');
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body, html){
        background-color: white !important;
    }
</style></Footer></slot></DropdownNav>
<slot></slot>