<script>
  import Popup from "$lib/components/Popup.svelte";
  let show_b1 = false;
</script>

<div class="stuff">
  <section class="container box1">
    <div class="bigrow" />
    <div id="yasmin" class="bigsq" on:click={() => (show_b1 = !show_b1)}>
      <img
        src="/images/stuff/yasmin_sqthumb.png"
        alt="Yasmin Brinkmann's landing page thumbnail"
      />
      {#if show_b1}
        <Popup />
      {/if}
    </div>
    <div class="smsq1">c</div>
    <div class="smsq2">d</div>
  </section>

  <section class="container box2">
    <div class="smsq1">a2</div>
    <div class="bigsq">b</div>
    <div class="smsq2">c</div>
    <div class="bigrow">d</div>
  </section>

  <section class="container box3">
    <div class="bigsq">a3</div>
    <div class="smsq1">b</div>
    <div class="shcol">c</div>
    <div class="shrow">d</div>
  </section>

  <section class="container box4">
    <div class="shcol">a4</div>
    <div class="shrow">b</div>
    <div class="bigsq">c</div>
    <div class="smsq1">d</div>
  </section>
</div>

<style>
  #yasmin {
    object-fit: cover;
  }
  .stuff {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .container {
    width: calc(50% - 4px);
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;
  }

  .container div,
  .container img {
    border-radius: 5px;
  }

  .box1 {
    grid-template-areas:
      "bigrow bigrow bigrow"
      "bigsq bigsq smsq1"
      "bigsq bigsq smsq2";
  }

  .box2 {
    grid-template-areas:
      "smsq1 bigsq bigsq"
      "smsq2 bigsq bigsq"
      "bigrow bigrow bigrow";
  }

  .box3 {
    grid-template-areas:
      "bigsq bigsq smsq1"
      "bigsq bigsq shcol"
      "shrow shrow shcol";
  }

  .box4 {
    grid-template-areas:
      "shcol shrow shrow"
      "shcol bigsq bigsq"
      "smsq1 bigsq bigsq";
  }

  .bigsq {
    grid-area: bigsq;
    background-color: rgba(100, 100, 255, 0.25);
  }
  .bigrow {
    grid-area: bigrow;
    background-color: rgba(255, 100, 100, 0.25);
  }
  .shcol {
    grid-area: shcol;
    background-color: rgba(100, 255, 100, 0.25);
  }
  .shrow {
    grid-area: shrow;
    background-color: rgba(255, 255, 100, 0.25);
  }
  .smsq1 {
    grid-area: smsq1;
    background-color: rgba(100, 255, 255, 0.25);
  }
  .smsq2 {
    grid-area: smsq2;
    background-color: rgba(255, 100, 255, 0.25);
  }

  @media only screen and (max-width: 600px) {
    .stuff {
      gap: 8px;
    }
    .container {
      width: 100%;
    }
  }
</style>
