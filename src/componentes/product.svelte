<script>
    export let data;
</script>

<figure>
	<div class="topo">
		<div class="tags">
			{data.tags.join(", ")}
		</div>
		<div class="disponibilidade">
			{data.qnt} {data.qnt === 1? `disponível`: 'disponíveis'}
		</div>
	</div>
	<div class="galeria">
		{#each data.fotos as item}
			<img src={item.foto} alt=""/>
		{/each}
	</div>
	<div class="bottom">
		<div class="titulo">
			{data.titulo}
		</div>
		<div class="prize">
			{#if data.venda}
				{data.venda.contrato &&
					`Venda no valor de R$${data.venda.contrato}`
				}
			{/if}
			{#if data.aluguel}
				{data.aluguel.contrato &&
					`Venda no valor de R$${data.venda.contrato}`
				}
				{data.aluguel.mensal &&
					`Aluguel mensal de R$${data.venda.mensal}`
				}
			{/if}
			{#if data.loteamento}
				{data.loteamento.price &&
					`Venda no valor de R$${data.loteamento.price}`
				}
				{data.loteamento.parcelas_plano &&
					"Parcelamento placeholder"
				}
			{/if}
		</div>
		<div class="loc">
			{data.loc_name}
		</div>
	</div>
</figure>
