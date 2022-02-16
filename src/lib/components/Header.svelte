<header>
  <h1><a href="/">Sara J. Wallén</a></h1>

  <nav>
    <ul>
      <li>
        <h2><a href="/blog">Blog</a></h2>
      </li>
      <li>
        <h2><a href="/stuff">Stuff</a></h2>
      </li>
      <li>
        <h2><a href="/contact">Contact</a></h2>
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
    text-transform: uppercase;
    flex-wrap: wrap;
  }

  h1 {
    margin-right: auto;
  }
  h1:hover:after {
    content: "🏠";
  }

  nav {
    margin-left: auto;
  }
</style>
