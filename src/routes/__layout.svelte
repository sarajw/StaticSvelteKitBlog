<!-- __layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";
  import "the-new-css-reset/css/reset.css";
  import "$lib/styles/font.css";
  import "$lib/styles/style.css";
</script>

<Header />

<main style:background-color={$page.stuff.color ?? "var(--bass)"}>
  <slot />
</main>

<Footer />
