<script>
  import { page } from "$app/stores";
</script>

<footer style:background-color={$page.stuff.color ?? "var(--bass)"}>
  <a href="/">{new Date().getFullYear()} Sara J. Wallén</a>
</footer>

<style>
  footer {
    line-height: var(--headheight);
    padding: 0 1rem;
    text-align: center;
  }
</style>
