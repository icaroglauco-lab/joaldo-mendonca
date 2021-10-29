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
  export let data;
</script>

<section>
  <h1 class="text-5xl bold mx-auto text-center">
    Pesquise por propriedades disponíveis
  </h1>
  <ItemsContent data={data}/>
</section>