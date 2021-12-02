<script>
	import DropdownNav from '../../componentes/dropdownNav.svelte';

  import Footer from "../../componentes/footer.svelte";

</script>


<DropdownNav/>
  
<slot />

<Footer/>

<style type="text/css">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body, html){
        background-color: white !important;
    }
</style>