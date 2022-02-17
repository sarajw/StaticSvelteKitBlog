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
    padding: 0.25rem 1rem 0;
    text-transform: lowercase;
    flex-wrap: wrap;
  }

  .name {
    margin-right: auto;
    font-size: var(--h1);
  }
  .name:hover::after {
    display: inline-block;
    content: "";
    background-image: var(--homeImgUrl);
    background-size: var(--h1) var(--h1);
    height: var(--h1);
    width: var(--h1);
    margin-left: 0.5rem;
  }

  nav {
    margin-left: auto;
    font-size: var(--h2);
  }

  @media (prefers-color-scheme: dark) {
    .name:hover::after {
      filter: invert(100%);
    }
  }
</style>
