<script context="module">
  export async function load({ page, fetch }){
    const url = `/propriedades.json`;
    const res = await fetch(url);

    let json_data = await res.json();
    let tags = Array.from(page.query.getAll('tags'));

    json_data = json_data.filter(d => d.cat === page.params.slug);

    if(tags.lenght>0){
      json_data = json_data.filter(d => tags.includes(d.tags.map(tag => tag.value)));
    }

    if(res.ok){
      return{
        props: {
          cat: page.params.slug,
          tags,
          data: json_data
        }
      }
    }

    return {
      status: res.status,
      error: new Error('!Erro de carregamento de propriedades/slug.json')
    }
  }
</script>

<script>
    import Items from '$lib/items column.svelte'
  
    export let cat = "";
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
          font-logo text-secondary absolute 
          top-6 right-32 
          subpixel-antialiased`} style="z-index:100">
        <div class="relative">
          Joaldo Mendonça
          <br/>
          <small class="float-right pr-10 font-hero" >{cat}</small>
          <img src="/logo.png" class="h-36 absolute -right-24 top-2 mix-blend-difference" alt="">
        </div>
      </div>  
  
    <Items data={data}></Items>
  
  </main>