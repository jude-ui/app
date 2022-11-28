<script>
  import { link, push, pop, replace } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<header>
  <h2>Header</h2>
  <div class="inner_head">
    <a
      href="/"
      use:link
      use:active>
      Main
    </a>
    <a
      href="/sub"
      use:link
      use:active>
      SubPage
    </a>
    <a href="/sub/1" use:link use:active={'/sub/*'}>SubDesc/1</a>
    <button type="button" on:click={() => replace("/sub/12")}>SubDesc/12</button>
  </div>
</header>

<div class="wrap_btn">
  <button on:click={() => pop()}>뒤로 가기</button>
  <button on:click={() => history.go(1)}>앞으로 가기</button>
  <button on:click={() => push('/sub/14')}>/sub/14</button>
</div>

<style lang="scss">
  header{
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    .inner_head{
      display: flex;
      column-gap: 8px;
      a, button{
        padding: 4px 10px;
        background: $color-yellow;
        color: #000;
        border-radius: 4px;
      }
    }
    h2{
      font-size: 20px;
      color: $color-blue;
    }
  }
  header .inner_head :global(.active){
    text-decoration: underline;
    background: blue;
    color: #fff;
  }
  .wrap_btn{
    padding-bottom: 30px;
    button{
      padding: 5px 10px;
      background: #e7e7e7;
      border-radius: 4px;
      &:hover{
        background: #ccc;
      }
    }
  }
</style>