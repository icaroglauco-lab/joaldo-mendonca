<script>
import { text } from 'svelte/internal';

	import DrodownMenu from './drodownMenu.svelte';
  let toggle = false;
  let data = [
    {
      text: "Início",
      href: "/"
    },
    {
      text: "Sobre",
      href: "/sobre"
    },
    {
      text: "Todas Propriedades",
      href: "/items"
    },
    {
      text: "Chacreamentos",
      items: [
        {
          text: "Pé de galinha",
          items: [
            {
              text: "Chacreamento 1",
              href: "/empreendimento/1"
            }
          ]
        }
      ]
    },
    {
      text: "Imóveis Urbanos",
    },
  ]

</script>

<div class="flex-none right-0 text-right top-4 sticky -mb-20 z-30">

    <button 
          on:click={() => toggle=!toggle}
          class="btn btn-square  rounded-none btn-ghost
          bg-secondary hover:bg-secondary hover:text-primary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
    </button>

    <DrodownMenu toggle={toggle} items={data}/>
  </div>
  
  <style type="text/css">
  </style>