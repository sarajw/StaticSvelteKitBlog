<script>
  import homeImg from "$lib/assets/images/home.svg";
</script>

<header style="--homeImgUrl: url('{homeImg}')">
  <a class="name" href="/">Sara J. Wallén</a>

  <nav>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/stuff">Stuff</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header,
  ul {
    display: flex;
    justify-content: space-between;
    gap: 0 1rem;
  }

  header {
    line-height: var(--headheight);
    padding: clamp(0.25rem, 2.55vw, 0.5rem) clamp(0.75rem, 5vw, 1.5rem) 0;
    text-transform: lowercase;
    flex-wrap: wrap;
  }

  .name {
    margin-right: auto;
    font-size: var(--h1);
  }
  .name:hover::after {
    position: absolute;
    content: "";
    background-image: var(--homeImgUrl);
    background-size: var(--h3) var(--h3);
    background-repeat: no-repeat;
    background-position: center;
    height: var(--headheight);
    width: var(--h2);
    margin-left: 0.1rem;
    filter: invert(53%) sepia(92%) saturate(389%) hue-rotate(7deg)
      brightness(88%) contrast(92%);
  }

  nav {
    margin-left: auto;
    padding-left: 1rem;
    font-size: var(--h3);
  }

  @media (prefers-color-scheme: dark) {
    .name:hover::after {
      filter: invert(66%) sepia(54%) saturate(653%) hue-rotate(5deg)
        brightness(98%) contrast(86%);
    }
  }
</style>
