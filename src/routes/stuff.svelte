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
          <p slot="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque faucibus mi in enim viverra vestibulum. Aliquam
            volutpat, massa ac commodo ullamcorper, ante nisl feugiat quam, ac
            gravida ipsum neque sed metus. Phasellus feugiat pretium sem.
            Vivamus quis porta mauris. Curabitur sagittis velit nisl, eu varius
            libero convallis in. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
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
          <p slot="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque faucibus mi in enim viverra vestibulum. Aliquam
            volutpat, massa ac commodo ullamcorper, ante nisl feugiat quam, ac
            gravida ipsum neque sed metus. Phasellus feugiat pretium sem.
            Vivamus quis porta mauris. Curabitur sagittis velit nisl, eu varius
            libero convallis in. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Sed quis accumsan
            sapien, eget finibus ipsum. Etiam id elementum augue, sit amet
            laoreet sapien. Sed nec lorem ac ligula fermentum interdum. Proin in
            egestas mauris, et pharetra turpis. Donec pulvinar, dui a volutpat
            consequat, est erat efficitur eros, non rhoncus urna erat a ex.
          </p>
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
