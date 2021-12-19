<script>
    import Searchbar from "./searchbar.svelte";

    let closed = false;
</script>

<div
    id="LoadingLogo"
    class="transition-all  delay-150 duration-700 ease-in-out
        fixed h-screen w-screen bg-secondary text-white 
    "
    style={`clip-path: circle(${closed? "12": "150"}% at 0% 0%)`}>

    <div id="MenuLogo"
        class="h-80"
        style={`    
            display: flex;
            justify-content: space-between;
            width: 55vw;
            flex-direction: row;
            text-align: center;

            position: absolute;
            top: 30%; right: 30%;
            transform-origin: center;
            overflow: visible;
        `}>

            <a href="/items/Chacreamento rural" class="">Chacreamento Rural</a>
            <a href="/Urbano Venda" class="">Propriedades Urbanas</a>
            <a href="/Urbano Aluguel" class="">Aluguel</a>
            <a href="/sobre" class="">Sobre</a>
            <a href="/contato" class="">Contato</a>


        <div style={`    
            display: flex;
            justify-content: end;
            flex-direction: column;
            text-align: center;
            `} class="font-logo py-10 
            "
        >

        
        </div>
        
    </div>

    <div class="absolute text-center hover:cursor-pointer hover:scale-105 transition-all delay-150 duration-700 ease-in-out overflow-hidden"
        style={` z-index: 1000;
            ${  !closed?
                "height: 30rem; top: 10%; right: 0vw;"
                :"height: 6rem; top: 0%; right: 92%;"}
        `}>
        <img 
            id="logoImg"
            
            src="/logo.png" alt="" 
            class="object-cover h-full"
            on:click={() => closed = !closed}       
        >
        
    </div>
    
    <Searchbar/>
  
</div>

<style lang="sass">
    a
        transition: all 250ms
        &:hover
            color: aquamarine
    #logoImg
        clip-path: polygon(20% 10%, 90% 28%, 78% 84%, 22% 87%)
    #LoadingLogo
        background-image: url(/Buildings.png)
        background-size: 463px
        background-position: 111% 136%
        background-repeat: no-repeat
        z-index: 1000
        overflow: hidden
        max-width: 100%
    #MenuLogo
        display: flex
        justify-content: space-between
        width: 700px
        max-width: 100vw
        flex-direction: row
        text-align: center
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        transform-origin: center
        overflow: visible
        z-index: 1000
    ul
        color: #202020
</style>