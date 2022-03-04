<script>
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";

  let blogZindex = 3;
  let portfolioZindex = 2;
  let contactZindex = 1;

  afterUpdate(() => {
    let path = $page.url.pathname;

    switch (path) {
      case "/":
        blogZindex = 3;
        portfolioZindex = 2;
        contactZindex = 1;
        break;
      case "/blog":
        blogZindex = 3;
        portfolioZindex = 2;
        contactZindex = 1;
        break;
      case "/portfolio":
        blogZindex = 2;
        portfolioZindex = 3;
        contactZindex = 1;
        break;
      case "/contact":
        blogZindex = 1;
        portfolioZindex = 2;
        contactZindex = 3;
        break;
    }
  });
</script>

<header>
  <a class="name" href="/">Sara J. Wallén</a>
  <nav>
    <ul>
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
  header,
  ul {
    display: flex;
    justify-content: space-between;
    gap: 0 1rem;
  }

  header {
    position: relative;
    line-height: var(--headheight);
    padding: clamp(0.25rem, 2.5vw, 0.5rem) clamp(0.75rem, 5vw, 1.5rem) 0;
    text-transform: lowercase;
    flex-wrap: wrap;
    z-index: 0;
  }

  .name {
    margin-right: auto;
    font-size: var(--h1);
    line-height: 2em;
  }

  nav {
    margin-left: auto;
    padding-left: 0.5rem;
    font-size: var(--h3);
    align-self: flex-end;
  }

  li {
    position: relative;
    height: 2em;
    line-height: 2em;
  }

  li::before {
    position: absolute;
    content: " ";
    left: -0.75rem;
    width: 0.75rem;
    height: 2em;
    border-top-left-radius: 0.5rem;
  }
  li::after {
    position: absolute;
    content: " ";
    right: -0.75rem;
    width: 0.75rem;
    height: 2em;
    border-top-right-radius: 0.5rem;
  }

  li:hover {
    z-index: 4 !important;
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
