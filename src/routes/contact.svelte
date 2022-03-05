<script context="module">
  export const load = async () => {
    return {
      stuff: { color: "var(--soprano)" },
    };
  };
</script>

<svelte:head>
  <title>sara j. wallén | Contact</title>
</svelte:head>

<h1>Get in touch:</h1>

<p class="emailLink"><a href="mailto:webdev@sarawallen.com">Email me!</a></p>

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label class="message">Message: <textarea name="message" /></label>
  </p>
  <button type="submit"><b>Send</b></button>
</form>

<style>
  .emailLink {
    text-align: center;
  }
  form {
    width: fit-content;
    display: block;
    margin: 0 auto;
  }
  label {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  input,
  textarea {
    margin-left: 0.5rem;
    border: 1px solid var(--hoverpop);
    width: 15rem;
    border-radius: calc(var(--border-radii) / 2);
  }
  button {
    display: block;
    padding: 0.5rem 1rem;
    border-radius: calc(var(--border-radii) / 2);
    color: var(--textinv);
    background-color: var(--linkspop);
    margin: 0 0 0 auto;
  }
  button:hover,
  button:focus,
  button:active {
    background-color: var(--hover2nd);
  }
</style>
