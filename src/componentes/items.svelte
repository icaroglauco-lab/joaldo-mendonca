
<script>
  import Produto from '../componentes/product.svelte'
  import BarraBuscar from '../componentes/barra_busca.svelte'

	export let data;
  export let maxitems=data.length;

  let filters = []

  $: data_filtered = filters.reduce((data_atual, filtro_atual) => {
    return filtro_atual(data_atual)
  } ,data).slice(0, maxitems);

  const filter_tag = (filter) => {
    filters[1] = filter;
    console.log(filters);
  }

  const filter_loc = (filter) => {
    filters[2] = filter;
    console.log(filters);
  }

  const clear_filters = () => {
    filters = []
  }

  const reverse = (flag) => {
    filters[0] = (data) => data.reverse()
  }

</script>


<BarraBuscar data={data_filtered} filter_tag={filter_tag} filter_loc={filter_loc} clear={clear_filters} reverse={reverse} />

<div class="container flex flex-col mx-auto mt-2 mb-28">
  <div class={`container col-span-4 p-2   
   ${data_filtered.length<=4? 
    "grid gap-14"
    : " items-start flex  space-x-5 flex-wrap justify-evenly"
    } `}>

    {#if data_filtered.length<=4}
      {#each data_filtered as p, i}
        <div class="mx-auto product-wrapper grid grid-gap-24 w-2/3">
          <Produto order={i} data={p} width="450px"/>
          <p class="text-xl order-2 text-body py-5 flex flex-col justify-between overflow-hidden ">
            <span class=" h-80 truncate whitespace-nowrap">
              {p.data.desc}
            </span>
            <a class="veja-mais underline text-base hover:animate-pulse" href={`${p.slug}`}>veja mais</a>
          </p>
        </div>

        <div class="divider w-1/2 mx-auto text-transparent">-----------------------------------------</div>
      {/each}
    
    {:else}
      {#each data_filtered as p, i}
        <Produto order={i} data={p}/>
      {/each}
    {/if}
    
  </div>
  {#if data_filtered.length<=4}
    <a  class="btn btn-outline mx-auto mt-6" href="/buscar">Veja todos</a>
  {/if}
</div>

<style>
  .product-wrapper{
    grid-template-columns: 500px auto;
  }
  .veja-mais{
    display: block;
  }
</style>