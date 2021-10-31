<script type="text/javascript">
	export let data;
	import Contato from './JoaldoContato.svelte'
</script>

<div class="container grid-cols-4">
	<div class="container col-span-3"></div>
	<Contato data={data} />
</div>