<script>

import DropdownNav from "../componentes/dropdownNav.svelte";
import Footer from "../componentes/footer.svelte";

</script>

<DropdownNav/>


<div class="absolute sticky navbar mb-2 bg-transparent text-neutral-content justify-between mt-8 shadow-lg 
  w-full

  grid
  h-auto
"
  style="
  position: sticky;
  top: 0;
  z-index: 30;
  background: #f0f8ff91;
  "
  >
    <div class="flex-none ml-10 relative">
      <img src="/logo.png" id="logo" on:click={() => window.location = "/"} class="cursor-pointer w-40 sm:ml-20 -mb-20" alt="Logo">
      <svg id="l1" xmlns="http://www.w3.org/2000/svg" width="390" height="11" fill="none" viewBox="0 0 390 11">
        <path fill="#FF914D" d="M0 0h350v3.3H0zM40 7.7h350V11H40z"/>
      </svg>     
    </div> 

    <!-- <div class="hidden 
      md:visible links grid pr-20  w-6/12" style="padding: 5rem">
      
      <ul class="comum flex flex-row space-x-5 text-lg justify-evenly text-secondary pt-4">
        <li><a href="">CONTATO</a></li>
        <li><a href="/sobre">SOBRE</a></li>
        <li><a href="/items">PROPRIEDADES</a></li>
      </ul>
      <ul class="categorias flex flex-row space-x-5 text-lg justify-evenly text-primary">
        <li><a href="">CHACREAMENTOS</a></li>
        <li><a href="">IMÓVEIS URBANOS</a></li>
      </ul> 
    </div> -->
    
  </div>

  
<slot />

<Footer/>

<style type="text/css">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body, html){
        background-color: white !important;
    }
</style>