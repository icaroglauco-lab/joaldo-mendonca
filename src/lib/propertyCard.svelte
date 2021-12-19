<script type="text/javascript">
  export let data;
  export let classes= "";
  export let onClick= ()=> {}
  export let hoverEffect = () => {}

  console.log(data)
</script>

  <div class={`w-96 h-72 relative z-10 m-1 ${classes}`} on:click={onClick} on:focus={hoverEffect} on:mouseover={hoverEffect}>
      <img src={data.fotos[0].foto}
      alt={data.titulo}
      class="object-cover h-full" style="background-color: #eee">

      <div class="absolute bottom-0 p-4 pl-10 pr-6" style="background-color: #001B2EF0;">
        <h4 class="text-white font-hero text-xl">Titulo de propriedade</h4>
      </div>

      <div class="absolute bottom-0 text-white text-sm right-0 p-4" style="mix-blend-mode: hard-light;">
        <small>R$</small>{data.price}
      </div>

      <div class="absolute top-2 flex flex-row text-sm font-body text-white overflow-hidden" style="font-size: 10px">
        {#each data.tags.map(e => e.value) as tag}
          <span class="mx-1 p-1 bg-primary">{tag}</span>
        {/each}
      </div>
  </div>
