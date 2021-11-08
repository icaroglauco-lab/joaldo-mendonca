<script context="module">
	export async function load({fetch}) {
	  const data = await fetch(`empreendimentos.json`)
		  .then((r) => r.json());
	  return {
		props: { data }
	  };
	}
</script>

<section>
	
</section>