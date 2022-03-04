<script>
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  import homeImg from "$lib/assets/images/home.svg";

  let homeZindex = 4;
  let blogZindex = 3;
  let portfolioZindex = 2;
  let contactZindex = 1;

  afterUpdate(() => {
    let path = $page.url.pathname;

    switch (path) {
      case "/":
        homeZindex = 4;
        blogZindex = 3;
        portfolioZindex = 2;
        contactZindex = 1;
        break;
      case "/blog":
        homeZindex = 3;
        blogZindex = 4;
        portfolioZindex = 2;
        contactZindex = 1;
        break;
      case "/portfolio":
        homeZindex = 2;
        blogZindex = 3;
        portfolioZindex = 4;
        contactZindex = 1;
        break;
      case "/contact":
        homeZindex = 1;
        blogZindex = 2;
        portfolioZindex = 3;
        contactZindex = 4;
        break;
    }
  });
</script>

<header>
  <a class="name" href="/">Sara J. Wallén</a>
  <nav>
    <ul>
      <li class="home" style="z-index: {homeZindex}">
        <a href="/"><img src={homeImg} alt="home" /></a>
      </li>
      <li class="blog" style="z-index: {blogZindex}">
        <a href="/blog">Blog</a>
      </li>
      <li class="portfolio" style="z-index: {portfolioZindex}">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li class="contact" style="z-index: {contactZindex}">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0 1rem;
    position: relative;
    line-height: var(--headheight);
    padding: 0 clamp(0.75rem, 4vw, 2rem);
    text-transform: lowercase;
    z-index: 0;
  }

  ul {
    display: flex;
    gap: 0;
  }

  .name {
    margin-right: auto;
    padding-right: 0.5rem;
    font-size: var(--h1);
    line-height: var(--headheight);
  }

  nav {
    margin-left: auto;
    font-size: var(--h3);
    align-self: flex-end;
  }

  li {
    position: relative;
    height: 2em;
    line-height: 2em;
    margin: 0 -0.25em;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  li:hover {
    z-index: 5 !important;
  }

  li a {
    display: inline-block;
    padding: 0 0.5em;
  }

  .home {
    width: 2em;
  }
  .home img {
    filter: var(--homeFilter);
    height: 1em;
    margin: 0.5em 0 0;
  }
  .home a:hover img,
  .home a:focus img,
  .home a:active img {
    filter: var(--homeFilterHover);
  }
  .home,
  .home::before,
  .home::after {
    background-color: var(--bass);
  }
  .blog,
  .blog::before,
  .blog::after {
    background-color: var(--tenor);
  }
  .portfolio,
  .portfolio::before,
  .portfolio::after {
    background-color: var(--alto);
  }
  .contact,
  .contact::before,
  .contact::after {
    background-color: var(--soprano);
  }
</style>
