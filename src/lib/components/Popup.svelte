<article class="popup">
  <button>X</button>
  <img
    src="/images/stuff/yasmin_large.png"
    alt="Yasmin Brinkmann desktop website screenshot"
  />
  <div class="heading">
    <h2>Yasmin Brinkmann</h2>
    <h3>
      <a href="https://yasmin-brinkmann.de" target="_blank"
        >yasmin-brinkmann.de</a
      >
    </h3>
  </div>
  <p>
    Sed in enim porta, varius ligula consectetur, placerat ipsum. Vestibulum
    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Fusce sollicitudin libero eu turpis tempor, eu rhoncus velit accumsan.
    Quisque accumsan libero sed ultricies bibendum. Vestibulum et arcu faucibus,
    vestibulum nunc facilisis, congue justo. Proin sodales, odio in ornare
    dignissim, purus nibh luctus lectus, et dignissim nulla ante euismod metus.
    In gravida bibendum hendrerit. Vestibulum sit amet sem nec nunc imperdiet
    tincidunt. Pellentesque vulputate tincidunt purus, et aliquam ipsum luctus
    non.
  </p>
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
    box-shadow: 0 0 0 10rem var(--shadow);
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
