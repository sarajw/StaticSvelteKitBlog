<script>
  import Popup from "$lib/components/Popup.svelte";
  let show_b1 = false;
  let show_b2 = false;
</script>

<div class="stuff">
  <section class="container box1">
    <div class="bigrow">a1</div>
    <div class="bigsq" id="yasmin" on:click={() => (show_b1 = !show_b1)}>
      <img
        src="/images/stuff/yasmin_sqthumb.png"
        alt="Yasmin Brinkmann's landing page thumbnail"
      />
      {#if show_b1}
        <Popup
          title="Yasmin Brinkmann"
          url="https://yasmin-brinkmann.de"
          image="yasmin_large.png"
          alt="Yasmin Brinkmann desktop website screenshot"
        >
          <div slot="desc">
            <p>
              A friend from swing dancing needed a new landing page, and
              gracefully agreed to my coding it from scratch as a learning
              exercise.
            </p>
            <p>
              Written in Notepad++ (!), pure "vanilla" HTML, CSS and a just
              smattering of JavaScript :)
            </p>
          </div>
        </Popup>
      {/if}
    </div>
    <div class="smsq1">c2</div>
    <div class="smsq2">d2</div>
  </section>

  <section class="container box2">
    <div class="smsq1">a2</div>
    <div class="bigsq" id="mktimelapse" on:click={() => (show_b2 = !show_b2)}>
      <img
        src="/images/stuff/mktimelapse_sqthumb.png"
        alt="MK timelapse GmbH website thumbnail"
      />
      {#if show_b2}
        <Popup
          title="MK timelapse GmbH"
          url="https://mktimelapse.com"
          image="mktimelapse_large.png"
          alt="MK timelapse GmbH desktop website screenshot"
        >
          <div slot="desc">
            <p>
              I work for MK timelapse GmbH, which in 2019 really needed an
              updated website. I hopped on to Wix, chose a template and then
              modified it heavily to reflect the feel of the new (at the time)
              MK logo.
            </p>
            <p>
              I plan to revisit the design of this site using maybe Webflow.
            </p>
          </div>
        </Popup>
      {/if}
    </div>
    <div class="smsq2">c2</div>
    <div class="bigrow">d2</div>
  </section>

  <section class="container box3">
    <div class="bigsq">a3</div>
    <div class="smsq1">b3</div>
    <div class="shcol">c3</div>
    <div class="shrow">d3</div>
  </section>

  <section class="container box4">
    <div class="shcol">a4</div>
    <div class="shrow">b4</div>
    <div class="bigsq">c4</div>
    <div class="smsq1">d4</div>
  </section>
</div>

<style>
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
    border-radius: 0.5rem;
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
    background-color: rgba(100, 100, 150, 0.25);
  }
  .bigrow {
    grid-area: bigrow;
    background-color: rgba(150, 100, 100, 0.25);
  }
  .shcol {
    grid-area: shcol;
    background-color: rgba(100, 150, 100, 0.25);
  }
  .shrow {
    grid-area: shrow;
    background-color: rgba(150, 150, 100, 0.25);
  }
  .smsq1 {
    grid-area: smsq1;
    background-color: rgba(100, 150, 150, 0.25);
  }
  .smsq2 {
    grid-area: smsq2;
    background-color: rgba(150, 100, 150, 0.25);
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
