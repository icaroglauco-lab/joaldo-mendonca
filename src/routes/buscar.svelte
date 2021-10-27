<script context="module">
  export async function load({fetch}) {
    const data = await fetch(`propriedades.json`)
        .then((r) => r.json());
    return {
      props: { data }
    };
  }
</script>

<script type="text/javascript">
	import Produto from '../componentes/product.svelte'

	export let data;
</script>

{#each data as p}
	<Produto data={p}/>
{/each}