<nav class="w-full h-30 flex flex-row flex-nowrap justify-between shadow px-5 py-2  font-body">
    <div id="fields flex flex-wrap ">
            
      <div class="form-control inline-block mr-2 mb-2">
          <span class="label-text font-hero">Procurar por Tags (separadas por vírgula) ou Títulos</span>
        <input type="text" placeholder="Ex: Aluguel, Vitória da Conquista..." class="input w-full input-bordered rounded-none">
      </div>        

      <div class="inline-block mr-2 mb-2">
        <select class="select select-info w-full max-w-xs rounded-none">
          <option disabled="disabled" selected="selected">Por categoria</option> 
          <option>telekinesis</option> 
          <option>time travel</option> 
          <option>invisibility</option>
        </select>
      </div>

      <div class="inline-block mr-2 mb-2">
        <select class="select  select-info w-full max-w-xs rounded-none">
          <option disabled="disabled" selected="selected">Por região</option> 
          <option>telekinesis</option> 
          <option>time travel</option> 
          <option>invisibility</option>
        </select>        
      </div>

    </div>

      <div class="btn-ghost btn h-auto self-stretch rounded-none  text-primary">Buscar</div>
  </nav>

<style lang="sass">
  nav 
    position: absolute
    bottom: 0px
    width: max-content
    background: rgb(200 200 200 / 0%)
    color: #222
  .btn
    transform: scaleY(1.15)
</style>
