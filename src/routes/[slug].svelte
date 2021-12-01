<script context="module">

  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const data = await fetch(`propriedades/${slug}.json`)
        .then((r) => r.json());
    return {
      props: { data }
    };
  }
</script>

<script>
  export let data;
  import Contato from '../componentes/JoaldoContato.svelte'  
  import CommonHero from '../componentes/common_hero.svelte';
  import MapView from '../componentes/MapView.svelte';

  let c_foto = 0;

</script>


<CommonHero />

<h1 class="text-3xl ml-48 mt-14"><small>.| </small>{data.titulo}<small>/ {data.tags.join(', ')}{'.'}</small></h1>

<div class="container grid gap-14 my-32">
  <div class="container shadow  bg-white p-6">
    <div class="flex space-x-4 relative items-center justify-center">
      {#each data.fotos as item, i}
        <!-- {JSON.stringify(item.foto)} -->
        <img src={item.foto}
          on:click={()=> c_foto = i}
          class={`
            border-2
            border-opacity-75
            border-solid
            border-gray-400
          ${c_foto==i? "ativo": "w-24"}`} alt=""/>
        {#if c_foto==i}
        <a class="rounded-full p-3 shadow-md bg-white" href={item.foto} target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        {/if}
      {/each}
    </div>
    <section class="mt-14">
      <h3 class="text-lg">Descrição</h3>
      <p class="text-gray-600 text-xs">
        {data.desc}
      </p>
    </section>
    <section>
      <h3 class="text-lg">Features</h3>
    </section>
    <section>
      <h3 class="text-lg mb-6">Mapa</h3>
      <MapView titulo={data.titulo} loc={data.loc} />
    </section>
  </div>
  <Contato data={data} classList="-mt-72"/>
</div>

<style type="text/css">
  @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

  .container.grid {
    width: 70%;
    margin-top: 25rem;
    margin-left: 13% ;
    box-sizing: content-box;
    grid-template-columns: auto 250px;
  }

  h1 small{
    margin-left: 15px;
    font-weight: 100;
    font-size: small;
  }

  h3{
    font-style: italic;
  }

  div >a {
    position: absolute;
    margin-top: -50%;
    margin-left: 50%;
  }

  div > img{
    cursor: pointer;
    transition: all 0.25s;
    transform: scale(1);
  }

  div > img:hover{
    transform: scale(1.05);
  }

  div > img.ativo{
    cursor: auto;
    margin-top: -95%;
    padding: 4rem;
    display: block;
    position: absolute;
    border: none;
    max-height: 400px;
  }
  div > img.ativo:hover{
    transform: scale(1);
  }
</style>