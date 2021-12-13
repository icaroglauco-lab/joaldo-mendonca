<script type="text/javascript">
  import PropertyFlipper from '$lib/flipper.svelte'
  import PropertyFlipper from "./lib/flipper.svelte" 
  let data = {
    "title": "Título Placeholder",
    "desc": "LoremIpsum",
    "photos": [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    "tags": [
      {img:"", value: "Em destaque", title: "Propriedade", desc: "Nova"},
      {img:"https://picsum.photos/id/1005/400/250", value: "Em destaque", title: "Propriedade", desc: "Nova"},
      {img:"https://picsum.photos/id/1005/400/250", value: "Em destaque", title: "Propriedade", desc: "Nova"},
    ],
    "loc" : "{\"coordinates\": [-40.8420757,-14.8562588]}"
  }

</script>

<PropertyFlipper data={data} hsize="98" full={true} descVisible={true}/>