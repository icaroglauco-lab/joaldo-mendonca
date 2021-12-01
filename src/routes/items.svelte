

<section class="bg-white h-full w-full m-auto mb-20">

    <div id="outwrapper" 
        class="space-y-10  min-h-screen container mx-auto flex flex-col p-10 px-16">
        
        <div class="tags flex space-x-10">
            <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6">
                Imóvel
            </h4>
            <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6">
                Praia
            </h4>
        </div>

        <div class="flex flex-row">

            <div class="filtros p-4 flex flex-col space-y-10 mr-5 bg-white shadow-lg text-sm">
                <ul class="empreendimentos flex p-6 flex-col space-y-5 ">
                    <li class="rounded-none border-none p-3 text-white">
                        Empreendimento 1
                    </li>
                    <li class=" rounded-none border-none p-3 text-white">
                        Empreendimento 2
                    </li>
                    <li class=" rounded-none border-none p-3 text-white">
                        Empreendimento 3
                    </li>
                    <li class=" rounded-none border-none p-3 text-white">
                        Empreendimento 4
                    </li>
                </ul>
                <ul class="condicoes flex p-6 flex-col space-y-5 ">
                    <li>
                        <div class="form-control">
                            <div class="flex space-x-2 justify-between">
                                <input type="text" placeholder="Min" class=" rounded-none input w-5/12">
                                <input type="text" placeholder="Max" class="rounded-none input w-5/12">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <ul class="items text-gray-800 space-y-2">
                <li>
                    <div class="card bordered lg:card-side rounded-none h-64">
                        <figure class="w-full overflow-hidden">
                          <img class="object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                        </figure> 
                        <div class="card-body">
                          <h2 class="card-title">Titulo</h2> 
                          <p>Descrição breve</p> 
                          <div class="card-actions">
                            <label for="agendamento" class="btn rounded-none bg-secondary border-none modal-button">Agende agora uma visita</label> 
                            <button class="btn btn-ghost rounded-none border-primary text-gray-700 hover:border-primary">Mais informação</button>
                          </div>
                        </div>
                    </div> 

                    
                </li>

                <li>
                    <div class="card bordered lg:card-side rounded-none  h-64">
                        <figure class="overflow-hidden">
                          <img class="object-cover" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80">
                        </figure> 
                        <div class="card-body">
                          <h2 class="card-title">Titulo</h2> 
                          <p>Descrição breve</p> 
                          <div class="card-actions">
                            <label for="agendamento" class="btn rounded-none bg-secondary border-none modal-button">Agende agora uma visita</label> 
                            <button class="btn btn-ghost rounded-none border-primary text-gray-700 hover:border-primary">Mais informação</button>
                          </div>
                        </div>
                    </div> 
                </li>
            </ul>
        </div>
    </div>

</section>

<style>
    section{
        background-image: url('svgs/Linhas geométricas 4.svg');
        background-position: -41% 94%;
        background-repeat: no-repeat;
    }

    .filtros{
        width: 25%;
    }
    .filtros .empreendimentos li, .condicoes input {
        background-color: rgba(3, 111, 255, 0.76);
    }

    .card{
        justify-content: space-between;
    }

    figure{
        width: 30vw;
        height: 16rem;
        overflow: hidden;
    }

    figure img{
        min-width: 100%;
        min-height: 100%;
        height: 100%;
    }
    
</style>