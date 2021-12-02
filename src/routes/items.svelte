<script>
    import PropriedadeCard from "../componentes/propriedade_card.svelte";
    import Carousel from '@beyonk/svelte-carousel'
</script>


<section class="bg-white h-full w-full m-auto mb-20 pt-44">

    <div class="bg-gray-50">
        <div id="outwrapper_items" 
            class="space-y-10  min-h-screen container mx-auto flex flex-col p-10 px-16">
            
            <Carousel perPage={6}>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Imóvel
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Praia
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Imóvel
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Praia
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Imóvel
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Praia
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Imóvel
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Praia
                </h4>
    
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Imóvel
                </h4>
                <h4 class="btn bg-primary border-red-50 rounded-full py-3 px-6 slide-content">
                    Praia
                </h4>
            </Carousel>
    
            <div class="flex flex-row">
    
                <div class="filtros p-4 flex flex-col space-y-10 mr-5 h-full sticky bg-white shadow-lg text-sm">
    
                    <div class="form-control mx-7">
                        <label class="label">
                          <span class="label-text text-gray-800">Buscar termo</span>
                        </label> 
                        <input type="text" placeholder="...." class="bg-light-secondary rounded-none input w-max">
                      </div>
    
                    <ul class="empreendimentos flex p-6 flex-col space-y-5 ">
                        <span class="text-gray-800">
                            Categorias
                        </span>
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
                        <span class="text-gray-800">
                            Preços
                        </span>
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
    
                <ul class="items text-gray-800 space-y-6 w-full">
                    <li>
                        <PropriedadeCard tags={true} glass={false} side={true}/>
                    </li>
                    <li>
                        <PropriedadeCard tags={true} glass={false} side={true}/>
                    </li>
                    <li>
                        <PropriedadeCard tags={true} glass={false} side={true}/>
                    </li>
                    <li>
                        <PropriedadeCard tags={true} glass={false} side={true}/>
                    </li>
                
                </ul>
            </div>
        </div>
    </div>

</section>

<style>
    section > div{
        background-image: url('svgs/Linhas geométricas 4.svg');
        background-position: -41% 94%;
        background-repeat: no-repeat;
    }

    .filtros{
        width: 25%;
    }
    .filtros .empreendimentos li, .condicoes input{
        background-color: rgba(3, 111, 255, 0.76);
    }

    :global(#outwrapper_items > .carousel .slides){
        margin-left: 25vw; max-width: 75vw
    }
</style>