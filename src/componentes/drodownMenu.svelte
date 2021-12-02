<script>
	import DropdownLi from './dropdownLi.svelte';
    export let toggle = false;
    export let items = [];
    
    $: dropdownStyle = toggle? "transform: scaleY(1)" :"transform: scaleY(0)"; 
  </script>

<div style={dropdownStyle} 
  class={`bg-light-secondary text-gray-800 inline-block absolute right-0 top-12 transition-all origin-top`}>

  <ul class="flex flex-col ">
    
    {#each items as item}
        <DropdownLi data={item} nv={0}/>
    {/each}
    
  </ul>
</div>