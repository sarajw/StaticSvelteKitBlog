<h1>Stuff!</h1>

<p>I've made stuff! Look!</p>

<div class="stuff">
  <div class="container box1">
    <div class="bigrow">a1</div>
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
  <!-- <div class="flex-break" /> -->
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

  .flex-break {
    flex-basis: 100%;
    overflow: hidden;
    height: 0;
  }

  .box1 div,
  .box2 div,
  .box3 div,
  .box4 div {
    flex: 1;
    border-radius: 4px;
    padding: 4px;
  }

  @media only screen and (max-width: 600px) {
    .stuff {
      gap: 8px;
    }
    .container {
      width: 90vw;
      height: 90vw;
      margin: 0 auto;
    }
  }
</style>
