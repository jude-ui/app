<script>
  import { fade } from 'svelte/transition'
</script>

<div in:fade>
  <h2>SubPage</h2>
  <div class="img_svelte"></div><!-- assets -->
  <div class="img_vite"></div><!-- public -->
</div>

<style>
  h2{
    font-size: 20px;
    color: purple;
  }
  .img_svelte, .img_vite{
    width:70px;
    height: 70px;
    background: url(@/assets/svelte.svg) 50% 50% no-repeat;
    background-size: contain;
  }
  .img_vite{
    background-image: url(/vite.svg);
  }

</style>