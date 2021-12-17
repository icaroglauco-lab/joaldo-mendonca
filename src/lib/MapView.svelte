<script type="text/javascript">
  let browser = true;// import { browser } from '$app/env';
  import {onMount} from 'svelte';
  
  export let locs  = [{"titulo":"Default", "coordinates": [-14.8562588, -40.8420757]}];
  export let styles="height: 350px";
  export let classes="";
  export let zoom = 15;
  export let onclick= () => {};
  export let id="map"
  export let titulo = "";
  export let indexViewing = 0;
  export let onMarkerClickedCb = (index) => {}


  onMount(async () => {
    if(browser) {
        const token = "pk.eyJ1IjoiaWNhcm9nbGF1Y28iLCJhIjoiY2t2Nm5udDY1MmJmMjMxcTFsN3JkY3l6OSJ9.1mjbLFat6x6R2Fby4oXHZw";
        const leaflet = await import('leaflet');
        inst = leaflet.map(id);
        
        leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: token
        }).addTo(inst);

        
        locs.forEach( async(loc, i) => {
          leaflet.marker(loc.coordinates)
            .on('click', event =>{
              inst.setView(locs[i].coordinates, zoom)
              onMarkerClickedCb(i);
            }).addTo(inst)
        });

        _locs = locs
        
       inst.setView(locs[indexViewing].coordinates, zoom)

    }

  });
  
</script>

<script context="module">
  var inst;
  var _locs;

  export function zoomAt(n) {
    inst.setView(_locs[n].coordinates, 15)
  }
</script>


<div id={id} style={styles} class={classes} on:click={onclick}>
</div>

<style lang="sass">
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
        
</style>