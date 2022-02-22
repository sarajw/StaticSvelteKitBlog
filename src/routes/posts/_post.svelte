<script>
  export let title;
  export let date;

  let options = { year: "numeric", month: "long", day: "numeric" };
  let datestring = new Date(date).toLocaleString("en-GB", options);
</script>

<svelte:head>
  <title>sara j. wallén | {title}</title>
</svelte:head>

<div class="heading">
  <h1>{title}</h1>
  <p class="posted">Posted on {datestring}</p>
</div>

<article class="post">
  <slot />
</article>

<style>
  .heading {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    gap: 0 1rem;
  }
  .posted {
    margin-left: auto;
  }
  .post :global(li) {
    font-size: var(--p);
    line-height: var(--h3);
    padding: 0 0 var(--gap);
    margin-inline-start: 1.5rem;
    list-style-type: disc;
  }
  .post :global(h2) {
    margin-top: var(--h2);
  }
</style>
