<script type="text/javascript">
	export let data;

	let nome = "";
	let telefone = "";
	let date = "";

	$: mensagem = `Olá Joaldo, sou ${nome}, gostaria de entrar em contato sobre o imóvel ${data.titulo} ${date.length>1? ", na data de "+date : ""}.
	${telefone.length>1? "Você pode entrar em contato comigo pelo telefone "+telefone: ""}`
</script>

<div class="col-span-1 w-96 space-y-4">
	<div class="info">
		<img src="pp.jpeg">
		<span class="nome"></span>
		<span class="telefone"></span>
		<span class="ende"></span>
	</div>		
	<div class="mensagem">
		<div class="form-control">
		  <label class="  input-group input-group-vertical  ">
		    <span class="label-text rounded-none">Nome</span>
		  	<input type="text" bind:value={nome} placeholder="Nome" class="input">
		  </label> 
		</div>
		<div class="form-control">
		  <label class="input-group input-group-vertical ">
		    <span class="label-text">Telefone</span>
		  	<input type="text" bind:value={telefone} placeholder="Telefone" class="input">
		  </label> 
		</div>
		<div class="form-control">
		  <label class="input-group input-group-vertical ">
		    <span class="label-text">Melhor data para visita</span>
		  	<input type="date"  bind:value={date}  placeholder="Data" class="input">
		  </label> 
		</div>
		<div class="form-control">
		    <label class="input-group input-group-vertical ">
		      <span class="label-text">Mensagem</span>
		    	<textarea bind:value={mensagem} class="textarea h-24 textarea-bordered" placeholder="Bio"/>
		    </label> 
		</div>
	</div>
</div>