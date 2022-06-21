<script>
  export let title;
  export let date;
  export let exerpt;
  export let image;
  export let caption;

  let options = { year: "numeric", month: "long", day: "numeric" };
  let datestring = new Date(date).toLocaleString("en-GB", options);
</script>

<svelte:head>
  <title>sara j. wallén | {title}</title>
</svelte:head>

<div class="blogpost">
  <div class="heading">
    <h1>{title}</h1>
    <p class="exerpt">{exerpt}</p>
    <p class="posted">Posted on {datestring}</p>
  </div>

  <article class="post" pubdate={date}>
    <img src="/images/blog/{image}" alt={caption} />
    <p class="caption">{caption}</p>
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
  .heading h1,
  .posted {
    color: var(--linkspop);
  }
  .exerpt {
    color: var(--hover2nd);
    font-size: var(--h3);
    line-height: var(--h2);
    font-style: italic;
  }
  .posted {
    margin-left: auto;
  }
  .caption,
  .post :global(.caption) {
    text-align: center;
    margin-top: -0.5rem;
    font-size: var(--sml);
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
  .post :global(h3), .post :global(h4) {
    color: var(--hover2nd);
  }
  .post :global(img) {
    display: block;
    border-radius: var(--border-radii);
    margin: 1rem auto 0;
    box-shadow: 1px 1px 15px -12px var(--shadow);
  }
  .post :global(pre) {
    margin: 0.5rem 0;
    padding: 3vmin 4vmin;
    background-color: var(--bass);
    border-radius: var(--border-radii);
    box-shadow: 1px 1px 15px -12px var(--shadow);
    white-space: pre-wrap;
    max-width: 100%;
    overflow-x: auto;
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
  .post :global(.tweet) {
    padding: 0 clamp(0.5rem, 3vmin, 1rem) 1vmin;
    background-color: var(--bass);
    border-radius: var(--border-radii);
    box-shadow: 1px 1px 15px -12px var(--shadow);
  }
  .post :global(table) {
    margin-block: 1rem;
    font-size: var(--sml);
  }
  .post :global(:is(td, th)) {
    padding: 0.5ch 1ch;
  }
  .post :global(thead) {
    border-bottom: 1px solid var(--shadow);
  }

  :root {
    --pink: mediumvioletred;
    --green: teal;
    --blue: slateblue;
    --yellow: darkgoldenrod;
    --orange: orangered;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --pink: hotpink;
      --green: springgreen;
      --blue: cyan;
      --yellow: gold;
      --orange: lightsalmon;
    }
  }

  .post :global(code .comment) {
    color: var(--orange);
  }
  .post :global(code .tag),
  .post :global(code .keyword),
  .post :global(code .operator) {
    color: var(--blue);
  }
  .post :global(code .punctuation),
  .post :global(code .parameter) {
    color: var(--pink);
  }
  .post :global(code .attr-name),
  .post :global(code .function) {
    color: var(--yellow);
  }
  .post :global(code .attr-value),
  .post :global(code .string) {
    color: var(--green);
  }
</style>
