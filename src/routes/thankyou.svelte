<svelte:head>
  <meta http-equiv="refresh" content="5;URL=/contact" />
  <title>sara j. wallén | Thank You!</title>
</svelte:head>

<div class="thanks">
  <h2>Thank you for your message!</h2>
  <p>I will get back to you shortly :)</p>
  <br />
  <div class="bar">
    <div class="in" />
  </div>
</div>

<style>
  .thanks {
    width: fit-content;
    margin: 5vw auto calc(3vw + var(--h0));
  }
  p,
  h2 {
    text-align: center;
  }
  .bar {
    background-color: var(--sopranopop);
    border-radius: 0.25rem;
    height: 0.5rem;
    width: 20ch;
    margin: 0 auto;
    overflow: hidden;
  }
  .in {
    animation: fill 5s linear 1;
    height: 100%;
    background-color: var(--soprano2nd);
  }

  @keyframes fill {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>
