<script>
  import { fade } from 'svelte/transition'
</script>
<div in:fade="{{ duration: 400 }}">
  <h2>Main</h2>
</div>

<style>
  h2{
    font-size: 20px;
    color:brown;
  }
</style>