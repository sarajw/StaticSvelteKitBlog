<script>
  let homeSelected = false;
  let blogSelected = false;
  let portfolioSelected = false;
  let contactSelected = false;

  function highlight(path) {
    switch (path) {
      case "home":
        homeSelected = true;
        blogSelected = false;
        portfolioSelected = false;
        contactSelected = false;
        console.log("you clicked on " + path);
        break;
      case "blog":
        homeSelected = false;
        blogSelected = true;
        portfolioSelected = false;
        contactSelected = false;
        console.log("you clicked on " + path);
        break;
      case "portfolio":
        homeSelected = false;
        blogSelected = false;
        portfolioSelected = true;
        contactSelected = false;
        console.log("you clicked on " + path);
        break;
      case "contact":
        homeSelected = false;
        blogSelected = false;
        portfolioSelected = false;
        contactSelected = true;
        console.log("you clicked on " + path);
        break;
    }
  }
</script>

<header>
  <a class="name" class:homeSelected on:click={() => highlight("home")} href="/"
    >Sara J. Wallén</a
  >
  <nav>
    <ul>
      <li class:blogSelected>
        <a href="/blog" on:click={() => highlight("blog")}>Blog</a>
      </li>
      <li class:portfolioSelected>
        <a href="/portfolio" on:click={() => highlight("portfolio")}
          >Portfolio</a
        >
      </li>
      <li class:contactSelected>
        <a href="/contact" on:click={() => highlight("contact")}>Contact</a>
      </li>
    </ul>
  </nav>
</header>
<div class="shoulders" />

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

  nav {
    margin-left: auto;
    padding-left: 1rem;
    font-size: var(--h3);
  }

  .homeSelected,
  .blogSelected,
  .portfolioSelected,
  .contactSelected {
    position: relative;
    background-color: var(--bass);
  }

  .homeSelected::before,
  .blogSelected::before,
  .portfolioSelected::before,
  .contactSelected::before {
    position: absolute;
    content: " ";
    left: -0.75rem;
    width: 0.75rem;
    height: var(--headheight);
    background-color: var(--bass);
    border-top-left-radius: 0.5rem;
    z-index: 1;
  }
  .homeSelected::after,
  .blogSelected::after,
  .portfolioSelected::after,
  .contactSelected::after {
    position: absolute;
    content: " ";
    right: -0.75rem;
    width: 0.75rem;
    height: var(--headheight);
    background-color: var(--bass);
    border-top-right-radius: 0.5rem;
    z-index: 1;
  }

  .shoulders {
    height: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-color: var(--bass);
  }
</style>
