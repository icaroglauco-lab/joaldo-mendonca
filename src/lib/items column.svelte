<script>
    import MapView, {zoomAt} from './MapView.svelte';
    import PropertyCard from './propertyCard.svelte'
  

    export let data = []
    let mapIndexControl = 0;
  
    let locs = data.map(d => {
        return {
            ...d.loc,
            titulo: d.title
        }
    });

    const tags = Array.from(new Set(data.map(d => d.tags.map(f=> `${f.value}`)).flat()));

    let filter_tags = tags.map(d => false);
    let shadow_filter_tags = new Array(filter_tags.length).map(d => false);


    $: filtered_data = data.filter(d => 
        d.tags.map(g => g.value).some(e => 
            tags.filter( (f, i) => shadow_filter_tags[i]? true: filter_tags[i])
                .find(k=>k==e))
    )

    $: if(filtered_data.length===0)
        filtered_data = data;

    $: console.log(filtered_data)

      
  </script>
  
<div class="fixed space-y-2 h-screen w-full flex-row z-50">
    <div style="position: absolute; height: 100%; width: 85%; right: 0px; z-index: 5">
        <MapView indexViewing={mapIndexControl} locs={locs} styles="height: 100%; width: 100%; margin-left: auto"/>
    </div>

    <div class="flex flex-col bg-white p-2 overflow-y-scroll h-full">
        {#each filtered_data as d, i}
            <PropertyCard data={d} 
                classes="hover:cursor-pointer hover:scale-105"
                hoverEffect={() => {
                    zoomAt(i)
                }}/>
        {/each}
    </div>

    <div class="w-max flex flex-row float-right px-6 absolute bottom-10 z-50 right-0">
        {#each Array.from(tags.values()) as tag, i}
            <div class={`
                    badge badge-lg  rounded-none p-5 ml-5 hover:cursor-pointer
                    ${!filter_tags[i] && !shadow_filter_tags[i]?
                        "bg-primary"
                        : "bg-secondary"}
                `} 
                on:mouseover={() => {
                    if (shadow_filter_tags[i]) return;
                    filter_tags[i] = true
                }}
                on:focus={() => {
                    if (shadow_filter_tags[i]) return;
                    filter_tags[i] = true
                }}   
                on:mouseout={()=> {
                    if (shadow_filter_tags[i]) return;
                    filter_tags[i] = false;
                }}
                on:blur={()=> {
                    if (shadow_filter_tags[i]) return;
                    filter_tags[i] = false;
                }}
                on:click={(e)=> {
                    filter_tags[i] = !filter_tags[i];
                    shadow_filter_tags[i] = !shadow_filter_tags[i];
                }}
            >
                {tag}
            </div>
        {/each}
    </div>
</div>