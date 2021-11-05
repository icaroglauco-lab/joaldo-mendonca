<script>	
	export let data;
	export let filter_tag;
	export let filter_loc;
	export let reverse;
	export let clear;

	$: localizações = [... new Set(data.map(item => item.data["loc_name"]))];
	$: tags =  [... new Set(data.map(item => item.data["tags"]).flat())];

	let reverso = false;

	$: reverse(reverso)

	let filters = {
		"tags" : (value) =>{
			filter_tag( (data) => 
				data.filter(item =>
					item.data["tags"].indexOf(value) > -1
			))
		},
		"localization" : (value) =>  {
			filter_loc( (data) => 
				data.filter(item =>
					item.data["loc_name"] === value
			))
		},
	}

	const set_selected = (attr) => (env) => 
		filters[attr](env.target.value)
	

	$: console.log(data);
	
</script>

<div class="barra space-x-4 btn-group mx-auto justify-center w-max flex-nowrap mb-0">
    <label class="cursor-pointer label space-x-2">
      <span class="label-text">{reverso? "Decrescente": "Crescente"}</span> 
      <input type="checkbox" bind:checked={reverso} class="toggle">
	</label>

	{#each [
		{ label: "Localização", items: localizações, attr: "localization"},
		{ label: "Palavras-chave", items: tags, attr: "tags"}
	] as selectionItems}
	<select class="select select-bordered rounded-none w-full max-w-xs" 
		on:change={set_selected(selectionItems.attr)}>

	  <option disabled="disabled" selected="selected">{selectionItems.label}</option> 
	  {#each selectionItems.items as item}
	  	<option value={item}>{item}</option>
	  {/each}
	</select>
	{/each}
	<button class="btn btn-outline" on:click={clear}>Limpar</button> 
</div>

<style>
	.barra {
		padding: 30px;
		width: 915px;
	}
</style>