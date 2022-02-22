<script>
  export let image;
  export let alt;
  export let title;
  export let url;
  export let localImg;
  export let rawtext;
  let urlNoHttp = "";
  if (url) {
    urlNoHttp = new URL(url).host;
  }
  if (localImg) {
    urlNoHttp = localImg;
  }
</script>

<article class="popup">
  <button>X</button>
  {#if image}<img src="/images/stuff/{image}" {alt} />{/if}
  <div class="heading">
    <h2>{title}</h2>
    {#if urlNoHttp}
      <h3>
        <a href={url ? url : `/images/stuff/${localImg}`}>{urlNoHttp}</a>
      </h3>
    {/if}
  </div>
  <slot name="desc" />
  {#if rawtext}
    <pre>{@html rawtext}</pre>
  {/if}
</article>

<style>
  button {
    position: fixed;
    top: calc(1.5 * var(--headheight) + 1rem);
    right: calc(5% + 1rem);
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    text-align: center;
    background-color: var(--sopranopop);
    border-radius: 50%;
  }
  button:hover {
    background-color: var(--hoverpop);
  }

  a {
    border-bottom: 1px solid var(--sopranopop);
  }
  a:hover {
    border-bottom: 1px solid var(--hover);
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0 0.5rem;
  }
  .popup {
    position: fixed;
    top: calc(1.5 * var(--headheight));
    left: 5%;
    width: 90%;
    min-height: 50%;
    max-height: calc(90% - var(--headheight));
    background-color: var(--tenor);
    padding: 1rem 1rem 0.5rem;
    border-radius: 0.5rem;
    border: 0.5rem solid var(--tenor);
    box-shadow: 0 0 0 30rem var(--shadow);
    overflow: auto;
    z-index: 10;
  }
  .popup img {
    border-radius: 5px;
  }

  .popup::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  .popup::-webkit-scrollbar-track {
    background: transparent;
  }
  .popup::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
    border-radius: 0.5rem;
  }
  .popup::-webkit-scrollbar-thumb:hover {
    background: var(--scrollhover);
  }

  pre {
    white-space: pre;
    font-family: "Lucida Console", monospace;
    width: max-content;
    margin: 0 auto;
  }
</style>
