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
	import ItemsContent from '../componentes/items.svelte'
  	export let data;
</script>

<Hero/>

<section>
	<h2 class="text-3xl mx-auto text-center">
		Algumas de nossas propriedades disponíveis
	</h2>
	<ItemsContent data={data} maxitems={3}/>
</section>

