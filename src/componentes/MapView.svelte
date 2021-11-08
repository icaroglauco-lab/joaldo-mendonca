<script type="text/javascript">
      export let loc;
      export let titulo
      import { browser } from '$app/env';
      import {onMount} from 'svelte';

      onMount(async () => {
            if(browser) {
                const leaflet = await import('leaflet');
                const token = "pk.eyJ1IjoiaWNhcm9nbGF1Y28iLCJhIjoiY2t2Nm5udDY1MmJmMjMxcTFsN3JkY3l6OSJ9.1mjbLFat6x6R2Fby4oXHZw";
                const l = JSON.parse(loc).coordinates.reverse();

                const map = leaflet.map('map').setView(l, 13);

                leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: token
                }).addTo(map);

                leaflet.marker(l).addTo(map)
                    .bindPopup(titulo)
                    .openPopup();
            }
      });
</script>

<div id="map">
</div>

<style type="text/css">
    #map {
        height: 350px;
    }
</style>