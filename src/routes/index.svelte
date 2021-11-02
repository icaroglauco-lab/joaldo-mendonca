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
	
<section>
	<h2 class="text-3xl mx-auto text-center">
		Aqui algumas de nossas propriedades disponíveis
	</h2>
	<ItemsContent data={data} maxitems={3}/>
</section>

<JoaldoMendoncaSec/>
