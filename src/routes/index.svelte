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
	import Hero from '../componentes/JoaldoMendonca.svelte'
	import ItemsContent from '../componentes/items.svelte'
	import LandingHero from '../componentes/landingHero.svelte';
  	export let data;
</script>

	<LandingHero></LandingHero>
	  

<section>
	<h2 class="text-3xl mx-auto text-center">
		Algumas de nossas propriedades disponíveis
	</h2>
	<ItemsContent data={data} maxitems={3}/>
</section>

<Hero/>
