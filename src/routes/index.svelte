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
	import JoaldoMendoncaSec from '../componentes/JoaldoMendonca.svelte'
	import ItemsContent from '../componentes/items.svelte'
	import LandingHeroSection from '../componentes/landingHero.svelte';
  	export let data;
</script>

<LandingHeroSection></LandingHeroSection>

<section class="px-6">
	<h2 class="text-3xl mx-auto text-center font-header">
		Aqui algumas de nossas propriedades disponíveis
	</h2>
	<ItemsContent data={data} maxitems={3}/>
</section>

<div class="divider">

	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
	  </svg>
</div> 

<JoaldoMendoncaSec/>
