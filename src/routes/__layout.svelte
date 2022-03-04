<!-- __layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";
  import "the-new-css-reset/css/reset.css";
  import "$lib/styles/font.css";
  import "$lib/styles/style.css";
  import lightTile from "$lib/assets/images/lighttile.png";
</script>

<Header />
{#if $page.url.pathname == "/"}
  <main
    style="
    background: var(--bass) url({lightTile});
    background-size: clamp(50px, 25vw, 400px);
    background-repeat: repeat;
    background-position: center;
    "
  >
    <slot />
  </main>
{:else}
  <main style:background-color={$page.stuff.color ?? "var(--bass)"}>
    <slot />
  </main>
{/if}
<Footer />
