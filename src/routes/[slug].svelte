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
  import Produto from '../componentes/product_single.svelte'
  import CommonHero from '../componentes/common_hero.svelte';
</script>

<CommonHero />
<Produto data={data}/>

