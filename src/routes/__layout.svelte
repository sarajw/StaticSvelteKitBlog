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
  :root {
    --basstransp: rgba(242, 242, 242, 0);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --basstransp: rgba(26, 26, 26, 0);
    }
  }

  .index {
    background-color: var(--bass);
    background-size: cover, clamp(200px, 25vw, 400px);
    background-repeat: no-repeat, repeat;
    background-position: center, center;
    background-image: linear-gradient(
        var(--bass),
        var(--basstransp) 30%,
        var(--basstransp) 70%,
        var(--bass)
      ),
      var(--tile);
  }
  .blog,
  [class^="posts"] {
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
