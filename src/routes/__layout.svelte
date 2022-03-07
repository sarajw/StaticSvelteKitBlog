<!-- __layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  import "the-new-css-reset/css/reset.css";
  import lightTile from "$lib/assets/images/lighttile.png";
  import "$lib/styles/font.css";
  import "$lib/styles/style.css";

  let route = $page.url.pathname.slice(1);

  afterUpdate(() => {
    route = $page.url.pathname.slice(1);
  });
</script>

<Header />
{#if route == ""}
  <main class="index" style="--tile: url({lightTile})">
    <slot />
  </main>
{:else}
  <main class={route}>
    <slot />
  </main>
{/if}
<Footer />

<style>
  .index {
    background-image: linear-gradient(
        var(--bass),
        rgba(242, 242, 242, 0) 30%,
        rgba(242, 242, 242, 0) 70%,
        var(--bass)
      ),
      var(--tile);
    background-color: var(--bass);
    background-size: clamp(200px, 25vw, 400px);
    background-repeat: repeat;
    background-position: center;
  }
  .blog {
    background-color: var(--tenor);
  }
  .portfolio {
    background-color: var(--alto);
  }
  .contact,
  .thankyou {
    background-color: var(--soprano);
  }
</style>
