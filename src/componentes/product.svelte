<script>
    export let data;
	let data_ = data.data;
    export let order;
    export let width = "";
</script>

<a href={`/${data.slug}`}
	class={`hover:scale-105 bg-white w-96 h-90 card my-5 rounded-none shadow-xl relative order-${order+1} transition-all hover:cursor-pointer hover:-translate-y-1`} 
	data-aos="flip-left" data-aos-once="true"

	style={`width: ${width}`}>
	<div class="topo absolute p-4 pl-1 w-full flex text-sm justify-between">
		<div class="tags text-xs text-gray-600 flex flex-wrap">
			{#each data_.tags as tag}
			<div class="p-1 rounded-full hover:cursor-pointer bg-white m-1">
				{tag}
			</div>
			{/each}
		</div>
		<div class="disponibilidade text-primaria text-xs">
			{data_.qnt} {data_.qnt === 1? `disponível`: 'disponíveis'}
		</div>
	</div>
	<figure class="h-56 overflow-hidden object-center object-cover">
		<img class="w-full" src={data_.fotos[0].foto} alt=""/>
	</figure>
	<div class="card-body max-w-md card-body">
		<div class="w-full flex pl-2 justify-between">
			<div class="card-title text-header italic text-1xl duration-300 transition-all hover:cursor-pointer border-white border-b-2 hover:border-gray-400 text-primaria mb-1.5">
				{data_.titulo}
			</div>
			<div class="prize text-xs">
				{#if data_.negocio.venda}
					{#if data_.negocio.venda.contrato!==undefined}
						R$ {parseInt(data_.negocio.venda.contrato).toLocaleString()}
						<br/><small>Venda a vista</small>
					{/if}
				{/if}

				{#if data_.negocio.aluguel}
					{#if data_.negocio.aluguel.mensal!==undefined}
						R$ {parseInt(data_.negocio.aluguel.mensal).toLocaleString()}
						<br/><small>Aluguel mensal</small>
					{/if}
				{/if}

				{#if data_.negocio.loteamento}
					{#if data_.negocio.loteamento.parcelas_plano!==undefined}
						R$ {parseInt(data_.negocio.loteamento.parcelas_plano[data_.negocio.loteamento.parcelas_plano.length -1]).toLocaleString()}
						<br/><small>Parcelas de até</small>
					{/if}
				{/if}
				
			</div>
		</div>
		<div class="card-actions flex w-full mt-7 text-gray-600 text-xs hover:cursor-pointer hover:animate-pulse items-end">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			{data_.loc_name}
		</div>
	</div>
</a>