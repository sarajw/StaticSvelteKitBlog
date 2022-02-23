<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let image;
  export let alt;
  export let title;
  export let rawtext;

  export let url;
  export let local;

  let urlNoHttp = "";
  if (url) {
    urlNoHttp = new URL(url).host;
  } else if (local) {
    urlNoHttp = local;
  }

  let closePopup;

  function close() {
    dispatch("closePopup");
  }
</script>

<article class="popup">
  <button on:click={close}>X</button>
  {#if image}<img src="/images/stuff/{image}" {alt} />{/if}
  <div class="heading">
    <h2>{title}</h2>
    {#if urlNoHttp}
      <h3>
        <a href={url ? url : `/images/stuff/${local}`} rel="external"
          >{url ? urlNoHttp : local}</a
        >
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
    top: calc(1.5 * var(--headheight) + 2vw);
    right: calc(5% + 2vw);
    width: calc(2rem + 1vw);
    aspect-ratio: 1;
    line-height: calc(2rem + 1vw);
    font-size: calc(1.5rem + 1vw);
    text-align: center;
    background-color: var(--sopranopop);
    border-radius: 50%;
  }
  button:hover {
    background-color: var(--hoverpop);
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
    min-height: 30%;
    max-height: calc(90% - var(--headheight));
    background-color: var(--tenor);
    padding: 2vw 2vw 1vw;
    border-radius: 0.5rem;
    border: 1vw solid var(--tenor);
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
  .popup::-webkit-scrollbar-corner {
    background: transparent;
  }

  pre {
    white-space: pre;
    font-family: "Lucida Console", monospace;
    font-size: clamp(0.25rem, 2vw, 1rem);
    width: max-content;
    margin: 0 auto;
  }
</style>
