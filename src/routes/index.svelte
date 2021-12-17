<script>
	import Heading from '$lib/heading.svelte';

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

  let UpperNavBarHidden = false
  
  const HideUpperNavBar = (state) => UpperNavBarHidden = !state

</script>

<main class="relative">
  <Heading msg="Principais destaques"/>


  <div class="overflow-hidden carousel w-full transition-all" style="height: 90vh;">
    {#each data as destaque, i}
      <div  id={`destaque${i+1}`} class="w-full mx-auto carousel-item">
        <img class='w-full object-cover' src={destaque.photos[0]} alt=""/>
      </div>
    {/each}
  </div>

   <!-- Controles -->
   <div fade class="mx-auto bottom-4 flex justify-center w-max py-4 space-x-2 items-end  transition-all z-10"
      style={`
        left: 50%; transform-origin: center;`}
    >
      {#each data as destaque, i}
        <a href={`#destaque${i+1}`} class="btn btn-xs btn-circle">{i+1}</a> 
      {/each}

    </div>


  <section class="bg-gray-50 shadow-inner">
    <div class="
      container mx-auto flex flex-col justify-between
      p-5 py-20
      space-y-16
      lg:px-44 lg:py-32 
      " style="min-height: 90vh">
      <h3 class="text-3xl text-secondary text-center px-7" style="color: rgba(3, 111, 255, 0.76);">
        Regiões de chacreamento
      </h3>
      <div class="flex space-x-10 justify-evenly flex-wrap text-xl">
        <span class="btn bg-gray-400 border-none rounded-full p-4 py-2 text-gray-50">Pé de galinha</span>
        <span class="btn bg-gray-400 border-none rounded-full p-4 py-2 text-gray-50">Barra do choça</span>
      </div>

      <div class="w-full flex flex-row justify-between mt-5 
      lg:px-32
      px-10
      space-x-10">
          <div class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae voluptatum rem
          </div>
          <div class="text-primary">
            facilis deserunt quos, id odit dolor cumque, possimus temporibus, dignissimos labore maxime magni eum consectetur error perspiciatis nostrum?
          </div>
      </div>

    </div>
  </section>

</main>

