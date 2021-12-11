<script type="text/javascript">
	import MapView from './MapView.svelte';
  export let data;
  let {photos, title, loc} = data;

  let hsize = "99";
  let minimizedCss = "transform: scale(0.1); z-index:20; border: 50px solid rgba(0, 72, 208, 0.24)"

  let viewMap = true;
  let basicBlockCss = `display: flex; position: absolute; bottom: 0px; right: 0px; height:${hsize}vh; transition: 250ms; width:100%; transform-origin: right bottom;`;


  $: MapViewCss = `${basicBlockCss}
          ${viewMap? 
            minimizedCss
          : "z-index:1"}`

  $: GaleryCss = `${basicBlockCss} min-width:600px;
          ${viewMap? 
            "z-index:1; "
          : minimizedCss} `


  $: GaleryClass = `overflow-hidden carousel w-full transition-all
          ${viewMap? 
            "ui-box top-leftToRight"
          : ""} `
</script>

<div style={`height: ${hsize}vh; min-width:600px;`}
    class="flex flex-wrap relative hover:cursor-pointer" 
    >

    <div class="absolute w-96 bottom-10 text-center align-middle py-5 pl-20 z-30 text-xl font-hero" 
         style={`background-color: #001B2EF0;
                 color: #FFE9B3;`}>
      {title}
    </div>
              
    <!-- Mapa view -->
    <MapView loc={loc} styles={MapViewCss} onclick={() => viewMap = false}/>
    <!-- galeria de imagens -->
    <div style={GaleryCss} class={GaleryClass} >
        {#each photos as image, i}
          <div id={`img${i+1}`} class="w-full mx-auto carousel-item" >
              <img class='w-full object-cover' src={image} alt="" on:click={() => viewMap = !viewMap}>
          </div>
        {/each}
    </div>

    <!-- Controles -->
    <div fade class="absolute bottom-0 flex justify-center w-full py-4 space-x-2 items-end  transition-all z-10"
              style={`${viewMap? "transform: scale(1)": "transform: scale(0)"}`}
    >
      {#each photos as image, i}
        <a href={`#img${i+1}`} class="btn btn-xs btn-circle">{i+1}</a> 
      {/each}
      
    </div>

</div>

<style lang="css">


</style>