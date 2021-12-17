<script>
    import Items from '$lib/items column.svelte'
  
    export let data = [
      {
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
      },
      {
        "title": "Título Placeholder 2",
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
          "coordinates": [-14.8582588, -40.8420757]
        }
      },
  
      {
        "title": "Título Placeholder 2",
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
          "coordinates": [-14.8582588, -40.8420757]
        }
      },
  
      {
        "title": "Título Placeholder 2",
        "desc": "LoremIpsum",
        "photos": [
          "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        ],
        "price": "2.000,00",
        "tags": [
          {img:"https://picsum.photos/id/1005/400/250", value: "Reformada", title: "Propriedade", desc: "Nova"},
        ],
        "loc" : {
          "coordinates": [-14.8582588, -40.8420757]
        }
      }
    ];
  
  </script>
  
  
  <main class="relative">
      <div class={`
          text-4xl 
          mix-blend-difference 
          transition
          font-logo text-secondary z-30 absolute 
          top-6 right-32 
          subpixel-antialiased`}>
        <div class="relative">
          Joaldo Mendonça
          <br/>
          <small class="float-right pr-10 font-hero" >Imóveis Urbanos</small>
          <img src="/logo.png" class="h-36 absolute -right-24 top-2 mix-blend-difference" alt="">
        </div>
      </div>  
  
    <Items data={data}></Items>
  
  </main>