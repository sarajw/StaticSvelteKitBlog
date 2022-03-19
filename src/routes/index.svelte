<script>
  import headShot from "$lib/assets/images/photo.png";
</script>

<svelte:head>
  <title>sara j. wallén | Blogolio</title>
</svelte:head>

<div class="centerer">
  <article>
    <h1>Welcome!</h1>
    <img src={headShot} width="400" alt="headshot" />
    <p>Hi! I'm Sara. Do have a look around :)</p>
  </article>
</div>

<style>
  .centerer {
    height: 100%;
    display: flex;
    place-content: center;
    place-items: center;
  }
  article {
    position: relative;
    flex-basis: 35rem;
    border-radius: calc(2 * var(--border-radii));
    background-color: var(--bass);
    box-shadow: 3px 3px 20px -10px black;
    padding: 0 1.25rem 0.5rem;
    margin: 5vw;
  }

  img {
    position: absolute;
    width: 40vmin;
    height: 49vmin;
    max-width: 300px;
    max-height: 367.5px;
    right: 0;
    bottom: 0;
    border-bottom-right-radius: calc(2 * var(--border-radii));
    filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.2));
  }
  h1,
  p {
    width: 60%;
  }
</style>
