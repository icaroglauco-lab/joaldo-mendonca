<script type="text/javascript">
	export let data;
	import Contato from './JoaldoContato.svelte'
</script>

<div class="container grid gap-14 my-32">
	<div class="container shadow">
		<section>
			fotos
		</section>
		<section>
			descrição
		</section>
		<section>
			features
		</section>
		<section>
			mapa
		</section>
	</div>
	<Contato data={data} />
</div>

<style type="text/css">
	.container.grid {
		width: 70%;
		margin-left: 15%;
		box-sizing: content-box;
		grid-template-columns: auto 250px;
	}
</style>