<!-- src/routes/blog/index.svelte -->
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

<section class="blogIndex">
  <ul>
    {#each posts as post}
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="../images/blog/{post.meta.image}" />
        <article>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          <p>{post.meta.exerpt}</p>
          <p class="posted">Posted {post.meta.date}</p>
        </article>
      </li>
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
    border-radius: 5px;
    overflow: hidden;
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
    background-color: var(--tenor);
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
