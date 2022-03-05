<script>
  import { page } from "$app/stores";
</script>

<footer style:background-color={$page.stuff.color ?? "var(--bass)"}>
  <p><a href="/">{new Date().getFullYear()} Sara J. Wallén</a></p>
</footer>

<style>
  footer p {
    line-height: calc(var(--headheight) * 2 / 3);
    padding: 0 1rem;
    text-align: center;
  }
</style>
