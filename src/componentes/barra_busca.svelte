<script type="text/javascript">
	export let data;
	export let add;
	export let clear;

	$: localizações = [... new Set(data.map(item => item["loc_name"]))];
	$: tipos_negocio = [... new Set(data.map(item => Object.keys(item["negocio"])).flat())];

	let reverso = false;

	const reverse = () => {
		add( data => data.reverse() )
	}
</script>

<div class="btn-group mx-auto justify-center w-max flex-nowrap">
    <label class="cursor-pointer label space-x-2">
      <span class="label-text">{reverso? "Decrescente": "Crescente"}</span> 
      <input type="checkbox" bind:checked={reverso} class="toggle">
	</label>
	{#each [
		{ label: "Localização", items: localizações},
		{ label: "Tipos de negócio", items: tipos_negocio}
	] as selectionItems}
	<select class="select select-bordered rounded-none w-full max-w-xs">
	  <option disabled="disabled" selected="selected">{selectionItems.label}</option> 
	  {#each selectionItems.items as item}
	  	<option value={item}>{item}</option>
	  {/each}
	</select>
	{/each}
	<button class="btn btn-outline" on:click={clear}>Limpar</button> 
</div>