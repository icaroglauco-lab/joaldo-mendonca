<script type="text/javascript">
	export let empreendimento_data;
	let {foto, titulo, desc, loc} = empreendimento_data;
</script>

<section class="hero" style={`background-image: url(${foto});`}>
    <div class="hero-overlay bg-opacity-60"></div> 
    <div class=" hero-content text-neutral-content">
      <div class="max-w-md grid grid-cols-3">
      	<img src={foto} alt={titulo} class="col-span-2">
      	<div class="col-span-1">
	        <h1 class="mt-10 text-5xl font-bold">
	          {titulo}
	        </h1> 
	        <p>
	        	{desc}
	        </p>
      	</div>
      </div>
    </div>
</section>