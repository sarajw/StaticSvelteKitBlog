<script>
  export let image;
  export let alt;
  export let title;
  export let url;
  const urlNoHttp = new URL(url).host;
</script>

<article class="popup">
  <button>X</button>
  <img src="/images/stuff/{image}" {alt} />
  <div class="heading">
    <h2>{title}</h2>
    <h3>
      <a href={url} target="_blank">{urlNoHttp}</a>
    </h3>
  </div>
  <slot name="desc">
    <div class="missing">No description.</div>
  </slot>
</article>

<style>
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    text-align: center;
    background-color: var(--alto);
    border-radius: 50%;
  }

  a {
    border-bottom: 1px solid var(--soprano);
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
    max-width: 90%;
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
</style>
