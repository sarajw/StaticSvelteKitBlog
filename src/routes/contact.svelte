<script context="module">
  export const load = async () => {
    return {
      stuff: { color: "var(--soprano)" },
    };
  };
  export const prerender = true;
</script>

<svelte:head>
  <title>sara j. wallén | Contact</title>
</svelte:head>

<h1>Get in touch:</h1>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  Content-Type="application/x-www-form-urlencoded"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="emailLink">
    <a href="mailto:webdev@sarawallen.com"><h3>webdev@sarawallen.com</h3></a>
    Click^ to use your own email app,
    <br />or feel free to use this form:
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

<style>
  .emailLink {
    text-align: center;
  }
  form {
    width: min-content;
  }
  input,
  textarea {
    border: 1px solid var(--hoverpop);
    background-color: var(--alto);
    border-radius: calc(var(--border-radii) / 2);
    min-width: 30ch;
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
