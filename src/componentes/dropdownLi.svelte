<script>
    import SelfDropdownMenu from './selfDropdownMenu.svelte';
    let toggle;
    export let data;
</script>

<li
    class={`z-50 btn relative overflow-visible bg-light-secondary grid rounded-none border-none px-3 hover:bg-primary`} on:click={()=> toggle=!toggle}>
   <a href={data.href}>
    {data.text}
   </a> 
</li>

{#if data.items}
    <SelfDropdownMenu toggle={toggle} items={data.items} />
{/if}