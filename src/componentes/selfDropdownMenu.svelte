<script>
    import DropdownLi from './dropdownLi.svelte';
    export let toggle = false;
    export let items = [];
    
    $: dropdownStyle = toggle? `transform: scaleY(1); height: auto` :"transform: scaleY(0); height: 0px"; 

</script>


<div style={dropdownStyle} 
  class={`bg-light-secondary my-1 text-gray-800  flex flex-col transition-all origin-top`}>

    {#each items as item}
        <DropdownLi data={item}/>
    {/each}
    
</div>