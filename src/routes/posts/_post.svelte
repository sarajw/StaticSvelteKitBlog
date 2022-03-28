<script>
  export let title;
  export let date;

  let options = { year: "numeric", month: "long", day: "numeric" };
  let datestring = new Date(date).toLocaleString("en-GB", options);
</script>

<svelte:head>
  <title>sara j. wallén | {title}</title>
</svelte:head>

<div class="blogpost">
  <div class="heading">
    <h1>{title}</h1>
    <p class="posted">Posted on {datestring}</p>
  </div>

  <article class="post">
    <slot />
  </article>
</div>

<style>
  .blogpost {
    margin: 5vw auto calc(3vw + var(--h0));
    max-width: 40rem;
  }
  .blogpost > * {
    margin: 0 3vw;
  }
  .heading {
    display: flex;
    flex-wrap: wrap;
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
    margin-top: var(--p);
    color: var(--linkspop);
  }
  .post :global(h3) {
    color: var(--hover2nd);
  }
  .post :global(img) {
    display: block;
    border-radius: 0.25rem;
    margin: 1rem auto 0;
  }
  .post :global(.caption) {
    text-align: center;
    margin-top: -0.5rem;
    font-size: var(--sml);
  }
  .post :global(pre) {
    margin: 0.5rem 0;
    padding: 3vmin 4vmin;
    background-color: var(--textinv);
    border-radius: var(--border-radii);
    white-space: pre-wrap;
  }
  .post :global(code) {
    font-size: var(--sml);
    line-height: 1.25em;
  }
  .post :global(h2 code) {
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
</style>
