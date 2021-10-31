<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const data = await fetch(`${slug}.json`)
        .then((r) => r.json());
    return {
      props: { data }
    };
  }
</script>

<script>
  export let data;
  import Produto from '../componentes/product_single.svelte'
</script>

<Produto data={data}/>

