<script type="text/javascript">
	export let data;

	let nome = "";
	let telefone = "";
	let date = "";

	$: mensagem = `Olá Joaldo,${ nome.length>1? ` me chamo ${nome} e `: ''} gostaria de entrar em contato sobre o imóvel ${data.titulo}${date.length>1? " , na data de "+date : ""}.
	${telefone.length>1? "Você pode entrar em contato comigo pelo telefone "+telefone: ""}`
</script>

<div class="col-span-1 w-96 space-y-4 shadow bg-white dark:bg-neutral ">
	<div class="info flex flex-col space-y-2 text-center p-5">
		<img alt="profile" src="pp.jpeg" class="mx-auto h-52 -mt-20 text-sm text-neutral">
		<span class="nome text-2xl">Joaldo Mendonça</span>
		<span class="telefone">77 7777777</span>
		<span class="ende">Shopping XXXXXXXXX n XX</span>
	</div>		
	<div class="mensagem space-y-4 p-4">
		<div class="divider"></div>
		<h2 class="ml-3">Entre em contato</h2>
		<div class="form-control ">
		  <label class="  input-group input-group-vertical ">
		  	<input type="text" bind:value={nome} placeholder="Nome" class="input">
		  </label> 
		</div>
		<div class="form-control">
		  <label class="input-group input-group-vertical ">
		  	<input type="text" bind:value={telefone} placeholder="Telefone" class="input">
		  </label> 
		</div>
		<div class="form-control">
		  <label class="input-group input-group-vertical ">
		  	<input type="date"  bind:value={date}  placeholder="Data" class="input">
		  </label> 
		</div>
		<div class="form-control">
		    <label class="input-group input-group-vertical ">
		    	<textarea bind:value={mensagem} class="textarea h-24 textarea-bordered" placeholder="Bio"/>
		    </label> 
		</div>
		<div class="actions gap-1 grid-cols-2 grid">
			<button class="btn bg-primary rounded-none w-auto">
				<svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
				Whatsapp
			</button>
			<button class="btn bg-primary rounded-none w-auto">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
				  </svg>
				Email
			</button>
		</div>
	</div>
</div>

<style>
	.input-group-vertical :first-child{
		border-radius: 0px !important;
		padding: 0.75rem;
	}
	.nome{
		font-family: "Lato";
	}
</style>