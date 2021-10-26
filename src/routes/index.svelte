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
	import Hero from '../componentes/hero.svelte'

	export let data;
	// console.log(data)
</script>

<Hero/>