<script>
    import SelfDropdownMenu from './selfDropdownMenu.svelte';
    let toggle;
    export let data;
    export let nv = 0;
</script>

<li href={data.href}
    class={`z-${nv} btn relative overflow-visible bg-light-secondary grid rounded-none border-none px-3 hover:bg-primary`} on:click={()=> toggle=!toggle}>
    {data.text}
</li>

{#if data.items}
    <SelfDropdownMenu toggle={toggle} items={data.items} />
{/if}