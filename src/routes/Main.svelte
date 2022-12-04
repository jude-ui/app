<script>
  import { fade } from 'svelte/transition'
  import svelteLogo from '@/assets/svelte.svg'
</script>
<div in:fade="{{ duration: 400 }}">
  <h2>Main</h2>
  <img src={svelteLogo} alt=""><!-- assets -->
  <img src="./vite.svg" alt=""><!-- public -->
  <div style="display:none">test</div>
</div>

<style>
  h2{
    font-size: 20px;
    color:brown;
  }
</style>