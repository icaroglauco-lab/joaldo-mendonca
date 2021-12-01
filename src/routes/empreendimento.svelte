<section class="w-full bg-white mx-auto flex flex-col overflow-hidden" 
    style="height: 90vh;
        background-image: url('https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
        background-size: cover;
        background-position: center;
        ">

        <div
        class="w-full"
            style=" height: 90vh; 
                top: 0; left:0; 
                backdrop-filter: blur(10px);
                position: absolute;
            "
        >

        <div class="container mx-auto flex flex-col p-10 px-44 justify-between h-full" style="z-index: 2">
            <h1 class="text-gray-800 text-3xl drop-shadow-sm">
                Propriedade incrível a beira do mar
            </h1>
    
            <!-- galeria de imagens -->
            
            <div class="overflow-hidden carousel w-full justify-center" style="height: 50vh; min-width:600px">
                <div id="item1" class="w-full mx-auto shadow-lg carousel-item">
                    <img class='object-cover w-full mx-auto rounded-2xl' src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                </div>
            </div>

            <div class="flex justify-center w-full py-4 space-x-2">
                <a href="#item1" class="btn btn-xs btn-circle">1</a> 
                <a href="#item2" class="btn btn-xs btn-circle">2</a> 
                <a href="#item3" class="btn btn-xs btn-circle">3</a> 
                <a href="#item4" class="btn btn-xs btn-circle">4</a>
              </div>
        
            <svg class="linhas_geometricas" id="l2" xmlns="http://www.w3.org/2000/svg" width="10" height="390" fill="none" viewBox="0 0 10 390">
                <path fill="#FF914D" d="M0 390V40h3v350zM7 350V0h3v350z"/>
            </svg>
        
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" style="margin-top: -100px" class="ml-auto" fill="none" viewBox="0 0 65 65">
                <path fill="#FF914D" d="M45.378 26.668c0 6.886-11.861 23.454-11.861 23.454S21.655 33.554 21.655 26.668c0-6.886 5.31-12.468 11.862-12.468 6.55 0 11.86 5.582 11.86 12.468z"/>
                <path stroke="#004AAD" stroke-opacity=".76" stroke-width="4" d="M19.283 2H2v15.25M47.242 2h15.08v15.25M47.242 63h15.08V47.75M17.081 63H2V47.75"/>
            </svg>
        </div>

    </div>
        
</section>


<input type="checkbox" id="agendamento" class="modal-toggle"> 
<div id="agendamento" class="modal">
  <div class="modal-box rounded-none glass">
    <h2 class="p-4 bg-secondary text-white object-contain"
      style="
        display: block;
        background-color: #1b8bed;
        margin-left: 35%;
        width: 28%;
        margin-top: -8%;
        margin-bottom: 5%;
      "
    >
      Agendamento
    </h2>
    <div class="form-control">
      <input type="date" placeholder="" class="input">
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Nome</span>
      </label> 
      <input type="text" placeholder="Nome para contato" class="input">
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Telefone</span>
      </label> 
      <input type="text" placeholder="99 9999-9999" class="input">
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label> 
      <input type="text" placeholder="exemplo@email.com" class="input">
    </div>
    <div class="form-control mt-5">
      <textarea class="textarea h-24" placeholder="Sua mensagem ..."></textarea>
    </div>
    <div class="modal-action">
      <label for="agendamento" class="btn bg-primary rounded-none">Enviar</label> 
      <label for="agendamento" class="btn rounded-none">Cancelar</label>
    </div>
  </div>
</div>


<section class="bg-white">
    <div class="container p-20 px-44 text-gray-800 mx-auto">
        <h3 class="text-secondary text-2xl">
           Decrição breve 
        </h3>
        <p class="my-20 text-gray-700">
            Descrição completa
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam debitis nemo sunt sint, ipsa, eum possimus odio doloremque ducimus delectus modi nostrum fugiat alias asperiores cumque adipisci, dolore vitae.
        </p>
        <ul class="p-10 space-y-10 text-gray-500">
            <li>
                <div class="avatar">
                    <div class="mb-8 rounded-full w-24 h-24">
                      <img src="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80">
                    </div>
                </div>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit eligendi fugiat cupiditate soluta labore illo fugit sequi odio aut? Totam soluta suscipit magnam quibusdam ea dolorem quo vel similique!</span>
            </li>
            <li>
                <div class="avatar">
                    <div class="mb-8 rounded-full w-24 h-24">
                      <img src="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80">
                    </div>
                </div>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit eligendi fugiat cupiditate soluta labore illo fugit sequi odio aut? Totam soluta suscipit magnam quibusdam ea dolorem quo vel similique!</span>
            </li>
            <li>
                <div class="avatar">
                    <div class="mb-8 rounded-full w-24 h-24">
                      <img src="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80">
                    </div>
                </div>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit eligendi fugiat cupiditate soluta labore illo fugit sequi odio aut? Totam soluta suscipit magnam quibusdam ea dolorem quo vel similique!</span>
            </li>
            
        </ul>
        
    </div>
    
    <label for="agendamento" class="btn rounded-none mx-auto bg-secondary border-none modal-button">Agende agora uma visita</label> 
</section>

<style>
#l2{
    left: 40px;
    position: absolute;
}

li>.avatar{
    float: left;
    margin-right: 15px;
}

li{
    min-height: 100px;
}
li span{
    line-height: 40px;
}
</style>