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
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--tenorpop);
  }
  li:hover {
    background-color: var(--basspop);
  }
  li:hover img {
    opacity: 0.66;
  }
  img {
    flex: 1 1 30%;
    min-width: 10rem;
    aspect-ratio: 1;
    object-fit: cover;
  }
  article {
    flex: 2 1 70%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0;
    padding: 0 1rem;
  }
  li:hover {
    background-color: var(--basspop);
  }
  li:hover img {
    opacity: 0.66;
  }
  .posted {
    text-align: right;
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
