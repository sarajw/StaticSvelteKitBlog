<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>sara j. wallén | Contact</title>
</svelte:head>

<div class="contact">
  <form name="contact" method="POST" data-netlify="true" Content-Type="application/x-www-form-urlencoded" action="/thankyou">
    <input type="hidden" name="form-name" value="contact" />
    <p class="emailLink">
      <a href="mailto:dev@sarawallen.com">dev@sarawallen.com</a>
      <br />Click^ to use your own email app,
      <br />otherwise please use the form:
    </p>
    <p>
      <label
        >Name:
        <br /><input type="text" name="name" /></label
      >
    </p>
    <p>
      <label
        >Email:
        <br /><input type="email" name="email" /></label
      >
    </p>
    <p>
      <label class="message">Message:<br /><textarea name="message" /></label>
    </p>
    <p>
      <button type="submit"><b>Send</b></button>
    </p>
  </form>
  <p class="emailLink">
    Looking for my socials? :)
    <br />
    <a href="https://sarawallen.com#contact" target="_blank">sarawallen.com</a>
  </p>
</div>

<style>
  .contact {
    width: fit-content;
    margin: 5vw auto calc(3vw + var(--h0));
  }
  .emailLink {
    text-align: center;
  }
  .emailLink a {
    display: inline-block;
    font-size: var(--h3);
    margin-bottom: 0.5rem;
  }
  form {
    width: min-content;
  }
  input,
  textarea {
    border: 1px solid var(--hoverpop);
    background-color: var(--tenor);
    border-radius: calc(var(--border-radii) / 2);
    width: 28ch;
    padding: 0.25rem 0.5rem;
  }
  textarea {
    height: 9.5rem;
    resize: vertical;
  }
  button {
    display: block;
    padding: 0.5rem 1rem;
    border-radius: calc(var(--border-radii) / 2);
    color: var(--textinv);
    background-color: var(--linkspop);
    margin: 0 auto;
  }
  button:hover,
  button:focus,
  button:active {
    background-color: var(--hover2nd);
  }
</style>
