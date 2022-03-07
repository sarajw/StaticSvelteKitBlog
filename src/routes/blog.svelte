<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  export let posts;
</script>

<!-- src/routes/blog/index.svelte -->
<svelte:head>
  <title>sara j. wallén | Blog</title>
</svelte:head>

<section class="blogIndex">
  <ul>
    {#each posts as post}
      <a href={post.path}>
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="../images/blog/{post.meta.image}" />
          <article>
            <h2>
              {post.meta.title}
            </h2>
            <p>{post.meta.exerpt}</p>
            <p class="posted">Posted {post.meta.date}</p>
          </article>
        </li>
      </a>
    {/each}
  </ul>
</section>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3vw;
  }
  li {
    display: flex;
    max-width: 60ch;
    min-width: 10rem;
    border-radius: var(--border-radii);
    overflow: hidden;
    color: var(--text);
    transition: transform 0.2s ease;
    box-shadow: 2px 2px 10px -8px var(--shadow);
  }
  img {
    flex: 1 1 40%;
    min-width: 10rem;
    aspect-ratio: 1;
    object-fit: cover;
  }
  article {
    flex: 2 1 60%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0;
    padding: 0 1rem;
    background-color: var(--tenorpop);
  }
  .posted {
    text-align: right;
  }
  a:hover li,
  a:focus li {
    transition: transform 0.1s ease;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px -9px var(--shadow);
  }
  a:hover img,
  a:focus img {
    opacity: 0.9;
  }
  a:hover article,
  a:focus article {
    background-color: var(--basspop);
  }

  @media only screen and (max-width: 500px) {
    ul {
      gap: 5vw;
    }
    li {
      flex-wrap: wrap;
    }
    img {
      aspect-ratio: 4/3;
    }
  }
</style>
