<script>
    import { onMount } from "svelte";

    let opacity_check = 0;

    onMount(()=>{
      window.addEventListener('scroll' , () => {
        opacity_check = (window.pageYOffset / 6)
        if(opacity_check>100) opacity_check = 100;
        if(opacity_check < 75) opacity_check = 75;
        if(opacity_check < 50) opacity_check = 50;
        if(opacity_check < 25) opacity_check = 25;
        if(opacity_check == 0) opacity_check = 0;
      })
    });

</script>

<div class={`navbar mb-2 bg-neutral text-neutral-content  rounded-none bg-opacity-${opacity_check}`}>
    <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
            <a href="/">
                <img style="height:45px;" src="logo.png" alt="logo">
            </a>
        </span>
    </div> 
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a href="/busca" class="btn btn-ghost btn-sm rounded-btn font-thin">
          <svg class="inline-block w-5 mr-2 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Propriedades
              
        </a> 
        <a href="/contato" class="btn btn-ghost btn-sm rounded-btn font-thin">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 mr-2 stroke-current">     
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
          </svg>
                Entre em contato
              
        </a> 
        <span class="btn btn-ghost btn-sm rounded-btn font-thin">
            <i class="fab fa-whatsapp-square inline-block w-5 mr-2 stroke-current"></i>
                (77) 9999999
              
        </span> 
      </div>
    </div> 
  </div>
  

<style>
    .navbar{
        z-index: 100000;
        position: fixed;
        width: 100%;
        top: 0px;

        font-family: sans-serif
        
    }
</style>