<script>
  import headShot from "$lib/assets/images/photo.png";
</script>

<svelte:head>
  <title>sara j. wallén | Blogolio</title>
</svelte:head>

<section>
  <h1>Welcome!</h1>
  <img src={headShot} width="400" alt="headshot" />
  <p>
    Hi! I'm Sara.
    <br />Take a look around :)
  </p>
</section>

<style>
  section {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: calc(2 * var(--border-radii));
    background-color: var(--bass);
    box-shadow: 3px 3px 20px -10px black;
    padding: 0 1rem 0.5rem;
    margin: calc(var(--headheight) * 1 / 3) auto;
  }
  img {
    position: absolute;
    max-width: 50%;
    right: 0;
    bottom: 0;
    border-bottom-right-radius: calc(2 * var(--border-radii));
    filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.2));
  }
  h1,
  p {
    max-width: 55%;
  }
</style>
