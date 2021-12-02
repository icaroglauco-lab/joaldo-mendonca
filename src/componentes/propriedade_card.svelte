<script>
    export let data = {
        fotos: ["https://picsum.photos/id/1005/400/250"],
        title: "Titulo",
        desc: "Descrição breve",
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    }

    export let agendamento_botao = false;
    export let tags = false;
    export let glass=  true;
    export let side= false;
    export let styles=""
</script>

  <div class={`card glass  rounded-none ${side? "lg:card-side": ""} ${glass? "": "shadow-none bg-white"} `} style={`${styles}; max-width: 65vw`}>
    <figure>
      <img src={data.fotos[0]} alt={data.fotos[0]}>
    </figure> 
    <div class="card-body">
        <h2 class="card-title">Titulo</h2> 
        <p>Descrição breve</p> 
        <br/>
        <div class="card-actions">
          {#if agendamento_botao}
          <label for="agendamento" class="btn rounded-none bg-secondary border-none modal-button">Agende agora uma visita</label> 
          {/if}
          <button class="btn btn-ghost rounded-none border-primary text-gray-700 hover:border-primary">Mais informação</button>
        </div>
        {#if tags}
            <div class="breadcrumbs ">
                <ul>
                    {#each data.tags as tag}
                        <li>
                            <small class="text-xs font-mono">{data.tags[0]}</small> 
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
  </div> 