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
  import BarraBuscar from '../componentes/barra_busca.svelte'

	export let data;

  let filters = []

  $: data_filtered = filters.reduce((data_atual, filtro_atual) => {
    return filtro_atual(data_atual)
  } ,data)

  const add_filter = (filter) => {
    filters.push(filter);
    console.log(filters);
  }

  const clear_filters = () => {
    filters = []
  }

</script>


<BarraBuscar data={data_filtered} add={add_filter} clear={clear_filters} />

<div class="container grid-cols-5 flex">
  <div class="col-span-1">
    
  </div>
  <div class="container col-span-4 mx-auto w-5/6
   p-2  items-start flex flex-wrap space-x-5 justify-evenly ">
    {#each data_filtered as p, i}
    	<Produto order={i} data={p}/>
    {/each}
  </div>
</div>