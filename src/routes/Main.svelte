<script>
  import CounterPlus from '@/components/CounterPlus.svelte'
  import CounterMinus from '@/components/CounterMinus.svelte'
  import CounterReset from '@/components/CounterReset.svelte'
  import { fade } from 'svelte/transition'
  import svelteLogo from '@/assets/svelte.svg'

  let toggle = true;
</script>
<div in:fade="{{ duration: 400 }}">
  <h2>Main</h2>
  <img src={svelteLogo} alt=""><!-- assets -->
  <img src="./vite.svg" alt=""><!-- public -->
  <br>
  <button on:click={() => toggle = !toggle}>Toggle</button>
  {#if toggle}
    <CounterPlus />
  {/if}
  <CounterMinus />
  <CounterReset />
</div>

<style lang="scss">
  :global(section) + :global(section){
    padding-top: 10px;
  }
  :global(button){
    font-size: 20px;
    line-height: 1.2;
    padding:10px;
    background:#ccc;
    border-radius: 4px;
  }
  h2{
    font-size: 20px;
    color:brown;
  }
</style>