<script>
  import { count } from '@/store'

  const countReset = () => {
    count.set(0)
  };
</script>

<section>
  <button type="button" on:click={countReset}>reset</button>
</section>