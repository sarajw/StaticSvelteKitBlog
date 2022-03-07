<svelte:head>
  <meta http-equiv="refresh" content="5;URL=/contact" />
</svelte:head>

<h2>Thank you for your message!</h2>
<p>I will get back to you shortly :)</p>
<br />
<div class="bar">
  <div class="in" />
</div>

<style>
  p,
  h2 {
    text-align: center;
  }
  .bar {
    background-color: var(--tenor);
    border-radius: 0.25rem;
    height: 0.5rem;
    width: 20ch;
  }
  .in {
    animation: fill 5s linear 1;
    height: 100%;
    background-color: var(--soprano);
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
