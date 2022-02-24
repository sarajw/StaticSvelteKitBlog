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
  function doNothing() {}
</script>

<div on:click={close} class="popwrap">
  <article on:click={(event) => event.stopPropagation()} class="popup">
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
</div>

<style>
  button {
    position: absolute;
    top: calc(0.5 * var(--headheight) + 2vw);
    right: calc(0.5 * var(--headheight) + 2vw);
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
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: calc(0.5 * var(--headheight));
    background-color: var(--shadowpop);
  }
  .popup {
    margin: 0 auto;
    min-height: 30%;
    max-height: calc(100% - 2 * var(--headheight));
    background-color: var(--bass);
    padding: 1vw 2vw 1vw;
    border-radius: 0.5rem;
    border: 1vw solid var(--bass);
    overflow: auto;
    z-index: 10;
  }
  .popup img {
    margin: 0.5em 0 0;
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
