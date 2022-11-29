<script>
  import { fade } from 'svelte/transition'
  import { location } from 'svelte-spa-router'
  export let params = {};
</script>

<div in:fade>
  <h3>SubDesc</h3>
  <div>params.id : {params.id}</div>
  <div>location : {$location}</div>
</div>

<style>
  h3{
    font-size: 20px;
    color: royalblue;
  }
  div{
    font-size:14px;
  }
</style>