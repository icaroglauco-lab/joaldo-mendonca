<script>
    export let data;
    export let order;
</script>

<figure class={` w-96 bg-white transition-all space-y-2 rounded shadow-md relative ${order}`}>
	<div class="topo absolute p-4 pl-1 w-full flex text-sm justify-between">
		<div class="tags text-xs text-gray-600 flex">
			{#each data.tags as tag}
			<div class="p-1 rounded-full hover:cursor-pointer bg-white mx-1">
				{tag}
			</div>
			{/each}
		</div>
		<div class="disponibilidade text-primaria text-xs text-white">
			{data.qnt} {data.qnt === 1? `disponível`: 'disponíveis'}
		</div>
	</div>
	<div class="galeria h-60 flex-none w-full h-60 object-cover overflow-hidden ">
		<img src={data.fotos[0].foto} class="h-full w-full" alt=""/>
	</div>
	<div class="bottom p-3">
		<div class="w-full flex pl-2 justify-between">
			<div class="titulo text-2xl duration-300 transition-all hover:cursor-pointer border-white border-b-2 hover:border-gray-400 text-primary mb-1.5">
				{data.titulo}
			</div>
			<div class="prize text-xs">
				{#if data.negocio.venda}
					{#if data.negocio.venda.contrato!==undefined}
						R$ {parseInt(data.negocio.venda.contrato).toLocaleString()}
						<br/><small>Venda a vista</small>
					{/if}
				{/if}

				{#if data.negocio.aluguel}
					{#if data.negocio.aluguel.mensal!==undefined}
						R$ {parseInt(data.negocio.aluguel.mensal).toLocaleString()}
						<br/><small>Aluguel mensal</small>
					{/if}
				{/if}

				{#if data.negocio.loteamento}
					{#if data.negocio.loteamento.parcelas_plano!==undefined}
						R$ {parseInt(data.negocio.loteamento.parcelas_plano[data.negocio.loteamento.parcelas_plano.length -1]).toLocaleString()}
						<br/><small>Parcelas de até</small>
					{/if}
				{/if}
				
			</div>
		</div>
		<div class="loc flex w-full mt-7 text-secundaria hover:cursor-pointer hover:animate-pulse">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			{data.loc_name}
		</div>
	</div>
</figure>

<style type="text/css">
	.titulo{
		font-family: 'Lato';
	}
</style>