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
    flex: 2 2 70%;
    max-width: 35rem;
    min-width: 250px;
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    flex: 1 1 30%;
    min-width: 200px;
    object-fit: cover;
  }
  article {
    padding: 0 1rem;
    background-color: var(--tenor);
  }
  .posted {
    text-align: right;
  }

  @media only screen and (max-width: 500px) {
    li {
      flex-wrap: wrap;
    }
  }
</style>
