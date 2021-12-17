<script>
	import Heading from '$lib/heading.svelte';
  // Componente searchbar feito!
  import PropertyFlipper from "$lib/flipper.svelte" 
  import PropertyContent from "$lib/propertyContent.svelte";

  export let data = {
    "title": "Título Placeholder",
    "desc": "LoremIpsum",
    "photos": [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    "price": "2.000,00",
    "tags": [
        {img:"https://picsum.photos/id/1005/400/250", value: "Em destaque", title: "Propriedade", desc: "Nova"},
      ],
    "loc" : {
      "coordinates": [-14.8562588, -40.8420757]
    }
  }

  let UpperNavBarHidden = false

  const HideUpperNavBar = (state) => UpperNavBarHidden = !state

</script>


<Heading msg={`Você está visualizando uma propriedade: ${data.title}`}/>


<PropertyFlipper data={data} onFlip={HideUpperNavBar} hsize={`98`} zoom={14} full={false} descVisible={true}></PropertyFlipper>
<PropertyContent data={data}/>
