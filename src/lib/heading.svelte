<script>
    export let msg = "/"
    export let fixed = true 
</script>

<div class={`fixed 
    text-xl 
    transition
    font-logo text-secondary z-30 
    top-3 right-6
    mix-blend-multiply 
    subpixel-antialiased`}>
      <div class="relative">
      {msg}
      <br/>
      <!-- <img src="/logo.png" class="h-36 absolute -right-24 top-2 mix-blend-difference" alt=""> -->
    </div>
  </div>  