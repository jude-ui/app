<script>
  import { fade } from 'svelte/transition'
</script>

<div in:fade>
  <h2>SubPage</h2>
</div>

<style>
  h2{
    font-size: 20px;
    color: purple;
  }
</style>