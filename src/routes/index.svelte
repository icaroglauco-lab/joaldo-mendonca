<script>
  import PropriedadeCard from "../componentes/propriedade_card.svelte";

</script>





<div class="out-wrapper">

  <div class="text-secondary w-80 relative px-10 py-6 ml-auto right-0 top-0 text-base z-30 lg:-mb-20

    md:absolute
    md:w-auto
    md:text-right
    md:right-10
    md:top-2
   " 
  >
  Joaldo Mendonça Imóveis<br/>
  Imóveis no lugar certo, com as melhores condições  
  </div>
  
  <div class="container mx-auto flex-col py-10 
    pt-10
    sm:pt-20">
    
    <div class="carousel mx-auto mb-2
      w-full
      relative
      z-20
      lg:w-5/6
      " id="campanhas">
      <div id="item1" class="w-full carousel-item">
        <img src="https://picsum.photos/id/500/800/300" class="w-full object-cover lg:pt-20">
      </div> 
      <div id="item2" class="w-full shadow-inner carousel-item">
        <img src="https://picsum.photos/id/501/800/300" class="w-full object-cover lg:pt-20">
      </div> 
      <div id="item3" class="w-full shadow-inner carousel-item">
        <img src="https://picsum.photos/id/502/800/300" class="w-full object-cover lg:pt-20">
      </div> 
      <div id="item4" class="w-full carousel-item">
        <img src="https://picsum.photos/id/503/800/300" class="  object-cover w-full lg:pt-20">
      </div>
    </div> 
    <div class="flex 
        relative
        z-20 
      justify-center w-full py-4 space-x-2">
      <a href="#item1" class="btn btn-xs btn-circle">1</a> 
      <a href="#item2" class="btn btn-xs btn-circle">2</a> 
      <a href="#item3" class="btn btn-xs btn-circle">3</a> 
      <a href="#item4" class="btn btn-xs btn-circle">4</a>
    </div>
    <svg class="linhas_geometricas" id="l3" xmlns="http://www.w3.org/2000/svg" width="321" height="526" fill="none" viewBox="0 0 321 526">
      <path fill="#FF914D" d="M20.56 243.901l484.779-2.06-1.799 4.694-484.78 2.06zM71.765 254.617l484.78-2.06-1.799 4.694-484.78 2.06zM14.893 276.726l484.78-2.06-1.8 4.694-484.78 2.06z"/>
    </svg>
    <svg class="linhas_geometricas" id="l2" xmlns="http://www.w3.org/2000/svg" width="10" height="390" fill="none" viewBox="0 0 10 390">
      <path fill="#FF914D" d="M0 390V40h3v350zM7 350V0h3v350z"/>
    </svg>
  </div>
</div>

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

<section class="text-gray-800" style='
  background-image: url("/joel-filipe-RFDP7_80v5A-unsplash.jpg");
  background-size: cover;
  background-position: 0% 13%;
  background-repeat: no-repeat;
'>
  <div class="container p-5 sm:p-20 mx-auto justify-center flex flex-col">
    <h2 class="text-2xl text-center p-6">
      Propriedades em destaque
    </h2>
    <div class="
      grid 
      justify-center
      grid-cols-1
      w-full
      space-y-5
      lg:space-x-5
      lg:grid-cols-2
      "
    >
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
      <PropriedadeCard agendamento_botao={true} side={false} 
        classes="mx-auto mt-5"
      />
    </div>

    <a href="/items" class="btn bg-primary rounded-full border-none mx-auto my-14  text-gray-50">Veja mais</a>
  </div>
</section>




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





<style>
  .out-wrapper{
    background: #f5f5f5;
    box-shadow: inset 0px -4px 1px rgba(0, 0, 0, 0.25);
  }


  #campanhas{
    margin-top: 10vh;
    box-sizing: border-box;
    min-height: 28rem;
  }

  #campanhas img{
  }

  .linhas_geometricas{
    display: inline;
  }

  #logo{
    z-index: 2;
  }
  #l1{
    position: absolute;
    margin-left: -50%;
    margin-bottom: -62%;
    z-index: 1;
  }

  #l2{
    left: 40px;
    position: absolute;
  }

  #l3{
    margin-top: -311px;
    right: 0px;
    position: absolute;
  }

</style>