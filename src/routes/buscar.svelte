<script context="module">
  export async function load({fetch}) {
    const data = await fetch(`propriedades.json`)
        .then((r) => r.json());
    return {
      props: { data }
    };
  }
</script>

<script>
  import ItemsContent from '../componentes/items.svelte'
  import CommonHero from "../componentes/common_hero.svelte";
  export let data;
</script>

<CommonHero/>

<section>
  <h1 class="text-5xl bold mx-auto text-center">
    Pesquise por propriedades disponíveis
  </h1>
  <ItemsContent data={data}/>
</section>