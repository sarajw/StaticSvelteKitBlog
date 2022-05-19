<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let image;
  export let asprat;
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

  function close() {
    dispatch("closePopup");
  }
</script>

<div on:click={close} class="popwrap">
  <article on:click|stopPropagation class="popup">
    <button on:click={close} title="Close">X</button>
    {#if image}<img src="/images/stuff/{image}" {alt} style:aspect-ratio={asprat} />{/if}
    <div class="heading">
      <h2>{title}</h2>
      {#if urlNoHttp}
        <h3>
          <a href={url ? url : `/images/stuff/${local}`} rel="external" target="_blank">{url ? urlNoHttp : local}</a>
        </h3>
      {/if}
    </div>
    <slot name="desc" />
    {#if rawtext}
      <pre>{@html rawtext}</pre>
    {/if}
  </article>
</div>

<style>
  button {
    position: absolute;
    top: 1vw;
    right: 1vw;
    width: calc(2rem + 1vw);
    aspect-ratio: 1;
    line-height: calc(2rem + 1vw);
    font-size: calc(1.5rem + 1vw);
    text-align: center;
    color: var(--textinv);
    background-color: var(--linkspop);
    border-radius: 50%;
  }
  button:hover {
    background-color: var(--hover2nd);
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0 0.5rem;
  }

  .popwrap {
    position: fixed;
    display: grid;
    place-content: center;
    place-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2.5vw;
    background-color: var(--shadowpop);
    z-index: 20;
  }
  .popup {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 75rem;
    min-height: 30%;
    max-height: 100%;
    background-color: var(--bass);
    padding: 2vw 2vw 1vw;
    border-radius: var(--border-radii);
    border: 1vw solid var(--bass);
    overflow: auto;
    overscroll-behavior: contain;
    z-index: 10;
  }
  .popup img {
    display: block;
    margin: 0 auto;
    border-radius: calc(var(--border-radii) / 2);
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
    border-radius: var(--border-radii);
  }
  .popup::-webkit-scrollbar-thumb:hover {
    background: var(--scrollhover);
  }
  .popup::-webkit-scrollbar-corner {
    background: transparent;
  }

  pre {
    font-size: clamp(0.25rem, 2vw, 1rem);
    line-height: clamp(0.275rem, 2.2vw, 1.1rem);
    white-space: pre;
    width: max-content;
    margin: 0 auto;
  }
</style>
