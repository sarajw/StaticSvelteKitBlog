<script>
  let show = false;
</script>

<div class="stuff">
  <div class="container box1">
    <div
      class="a1 bigrow"
      style="background: url('/images/stuff/yasmin_small.png') center; background-size:cover;"
      on:click={() => (show = !show)}
    >
      {#if show}
        <div class="popup">
          <img
            src="/images/stuff/yasmin_large.png"
            alt="Yasmin Brinkmann website screenshot"
          />
          <h2>
            <a href="https://yasmin-brinkmann.de" target="_blank"
              >Whee! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a
            >
          </h2>
          <p>
            Sed in enim porta, varius ligula consectetur, placerat ipsum.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Fusce sollicitudin libero eu turpis tempor,
            eu rhoncus velit accumsan. Quisque accumsan libero sed ultricies
            bibendum. Vestibulum et arcu faucibus, vestibulum nunc facilisis,
            congue justo. Proin sodales, odio in ornare dignissim, purus nibh
            luctus lectus, et dignissim nulla ante euismod metus. In gravida
            bibendum hendrerit. Vestibulum sit amet sem nec nunc imperdiet
            tincidunt. Pellentesque vulputate tincidunt purus, et aliquam ipsum
            luctus non. Integer eget diam id tortor tristique aliquam non id
            metus. Cras quis lorem est. Vestibulum tempor tortor lorem, non
            egestas diam dignissim aliquam. Aliquam elit magna, ultricies et
            convallis sed, pretium eu est. Aenean et commodo eros. Donec id nibh
            a nulla efficitur efficitur ut et odio. Aenean ac pharetra magna, et
            ultrices lorem. Proin dictum dictum ante, a ultricies eros convallis
            vitae. Nam consequat, metus ac pretium malesuada, lorem magna
            faucibus urna, a posuere est nulla et elit. Sed vestibulum ligula
            sem, et suscipit est scelerisque vel. Sed ut congue arcu, at semper
            ante. Sed rhoncus consectetur nulla. In hac habitasse platea
            dictumst. Morbi aliquet sit amet odio tristique finibus.
          </p>
        </div>
      {/if}
    </div>
    <div class="bigsq">b</div>
    <div class="smsq1">c</div>
    <div class="smsq2">d</div>
  </div>

  <div class="container box2">
    <div class="smsq1">a2</div>
    <div class="bigsq">b</div>
    <div class="smsq2">c</div>
    <div class="bigrow">d</div>
  </div>

  <div class="container box3">
    <div class="bigsq">a3</div>
    <div class="smsq1">b</div>
    <div class="shcol">c</div>
    <div class="shrow">d</div>
  </div>

  <div class="container box4">
    <div class="shcol">a4</div>
    <div class="shrow">b</div>
    <div class="bigsq">c</div>
    <div class="smsq1">d</div>
  </div>
</div>

<style>
  .stuff {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .container {
    width: 42vw;
    min-width: 250px;
    height: 42vw;
    min-height: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;
  }

  .container div {
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

  .popup {
    position: fixed;
    top: calc(1.5 * var(--headheight));
    left: 5%;
    max-width: 90%;
    max-height: calc(90% - var(--headheight));
    background-color: var(--tenor);
    padding: 0 1rem;
    overflow: auto;
    z-index: 10;
  }
  .popup img {
    margin: 1rem 0 0;
    border-radius: 5px;
  }

  @media only screen and (max-width: 600px) {
    .stuff {
      gap: 8px;
    }
    .container {
      width: 80vw;
      min-width: 200px;
      height: 80vw;
      min-height: 200px;
      margin: 0 auto;
    }
  }
</style>
