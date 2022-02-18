<!-- _post.svelte -->
<script>
  export let title;
  export let date;

  let options = { year: "numeric", month: "long", day: "numeric" };
  let datestring = new Date(date).toLocaleString("en-GB", options);
</script>

<h1>{title}</h1>

<p class="posted">Posted on {datestring}</p>

<article class="post">
  <slot />
</article>

<style>
  .posted {
    text-align: right;
  }
  .post :global(li) {
    font-size: var(--p);
    line-height: var(--h3);
    padding: 0 0 var(--gap);
    margin-inline-start: 1.5rem;
    list-style-type: disc;
  }
  .post :global(h2) {
    padding-top: var(--h1);
  }
</style>
