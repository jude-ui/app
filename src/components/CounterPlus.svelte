<script>
  import { onDestroy } from 'svelte'
  import { count } from '@/store'

  let countNumber;

  const unsubscribeCount = count.subscribe($count => countNumber = $count)
  onDestroy(() => {
    unsubscribeCount()
  });
</script>

<h2>{ countNumber }</h2>

<section>
  <button on:click={() => countNumber += 1}>+</button>
</section>
