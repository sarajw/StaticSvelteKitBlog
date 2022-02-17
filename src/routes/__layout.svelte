<!-- __layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "the-new-css-reset/css/reset.css";
  import "$lib/styles/fonts.css";
  import "$lib/styles/style.css";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
