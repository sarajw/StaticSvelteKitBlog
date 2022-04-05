<script>
  import Popup from "$lib/components/Popup.svelte";
  import Ascii from "$lib/assets/ascii-art.txt?raw";
  let show_a1 = false;
  let show_b1 = false;
  let show_b2 = false;
  let show_d2 = false;
  let show_b3 = false;
  let show_c3 = false;
  let show_c4 = false;

  function popupClose(event) {
    show_a1 = false;
    show_b1 = false;
    show_b2 = false;
    show_d2 = false;
    show_b3 = false;
    show_c3 = false;
    show_c4 = false;
  }
</script>

<svelte:head>
  <title>sara j. wallén | Portfolio</title>
</svelte:head>

<div class="portfolio">
  <section class="container box1">
    <button
      class="bigrow"
      id="a1"
      style="background-image: url('/images/stuff/sarawallen_com.png')"
    >
      <h1 on:click={() => (show_a1 = true)} class="caption">
        sara&#8203;wallen.com
      </h1>
    </button>
    {#if show_a1}
      <Popup
        on:closePopup={popupClose}
        title="sarawallen.com"
        url="https://sarawallen.com"
        image="sarawallen_com_large.png"
        asprat="4/3"
        alt="Sara's main landing page"
      >
        <div slot="desc">
          <p>
            I had an idea about using the behaviour of the CSS property
            "position: sticky" to make a stack of cards that would land on top
            of each other when scrolling. Well, I made it and immediately
            applied it to my landing page :)
          </p>
          <p>Written in Notepad++ in HTML and CSS only!</p>
        </div>
      </Popup>
    {/if}
    <button
      class="bigsq"
      id="b1"
      style="background-image: url('/images/stuff/yasmin_sqthumb.png')"
    >
      <h1 on:click={() => (show_b1 = true)} class="caption">Yasmin</h1>
    </button>
    {#if show_b1}
      <Popup
        on:closePopup={popupClose}
        title="Yasmin Brinkmann"
        url="https://yasmin-brinkmann.de"
        image="yasmin_large.png"
        asprat="16/9"
        alt="Yasmin Brinkmann desktop website screenshot"
      >
        <div slot="desc">
          <p>
            A friend from swing dancing needed a new landing page, and
            gracefully agreed to my coding it from scratch as a learning
            exercise.
          </p>
          <p>
            Written in pure "vanilla" HTML, CSS and a smattering of JavaScript
            :)
          </p>
        </div>
      </Popup>
    {/if}
    <div class="smsq1" id="c1" />
    <div class="smsq2" id="d1" />
  </section>

  <section class="container box2">
    <div class="smsq1" id="a2" />
    <button
      class="bigsq"
      id="b2"
      style="background-image: url('/images/stuff/mktimelapse_sqthumb.png')"
      title="Open MK timelapse GmbH"
    >
      <h1 on:click={() => (show_b2 = true)} class="caption">
        MK time&shy;lapse
      </h1>
    </button>
    {#if show_b2}
      <Popup
        on:closePopup={popupClose}
        title="MK timelapse GmbH"
        url="https://mktimelapse.com"
        image="mktimelapse_large.png"
        asprat="16/9"
        alt="MK timelapse GmbH desktop website screenshot"
      >
        <div slot="desc">
          <p>
            I work for MK timelapse GmbH, which in 2019 really needed an updated
            website. I hopped on to Wix, chose a template and then modified it
            heavily to reflect the feel of the new (at the time) MK logo.
          </p>
          <p>I plan to revisit the design of this site using maybe Webflow.</p>
        </div>
      </Popup>
    {/if}
    <div class="smsq2" id="c2" />
    <button
      id="d2"
      class="bigrow"
      style="background-image: url('/images/stuff/binnenalster_small.jpg')"
      title="Open Hamburg"
    >
      <h1 on:click={() => (show_d2 = true)} class="caption">Hamburg</h1>
    </button>
    {#if show_d2}
      <Popup
        on:closePopup={popupClose}
        title="Hamburg Binnenalster"
        local="binnenalster.jpg"
        image="binnenalster.jpg"
        asprat="4/3"
        alt="A photo of the Hamburg Binnenalster"
      >
        <div slot="desc">
          <p>A nice photo I took :)</p>
        </div></Popup
      >
    {/if}
  </section>

  <section class="container box3">
    <div class="bigsq" id="a3" />
    <button
      class="smsq1"
      id="b3"
      style="background-image: url('/images/stuff/mega-zine.png')"
      title="Open Mega-Zine"
    >
      <h2 on:click={() => (show_b3 = true)} class="caption">Mega-zine</h2>
    </button>
    {#if show_b3}
      <Popup
        on:closePopup={popupClose}
        title="Channel 4 Teletext's Mega-zine"
        url="https://mega-zine.netlify.app/"
        image="mega-zine.png"
        asprat="8/5"
        alt="Mega-zine teletext mock-up screenshot"
      >
        <div slot="desc">
          <p>
            This is a mock-up in HTML and CSS of an old and slightly strange
            Channel 4 Teletext page I used to read avidly as a teen, Mega-zine.
          </p>
          <p>
            With thanks to <a href="https://zinemuseum.co.uk/"
              >The Mega-zine Museum</a
            >
            and <a href="https://teletextart.tumblr.com/">teletext art</a> for the
            great quality almost-source materials I could copy!
          </p>
        </div>
      </Popup>
    {/if}
    <button
      class="shrow"
      id="c3"
      style="background-image: url('/images/stuff/tumblr_small.png')"
      title="Open Tumblr"
    >
      <h1 on:click={() => (show_c3 = true)} class="caption">Tumblr</h1>
    </button>
    {#if show_c3}
      <Popup
        on:closePopup={popupClose}
        title="Swingtänzerin"
        url="https://swingtanzerin.tumblr.com/"
        image="tumblr.png"
        asprat="7/5"
        alt="A wall with stickers reading DER HUSTLE IST HART and DER STRUGGLE SO REAL"
      >
        <div slot="desc">
          <p>There is a lot of stuff on this old tumblr of mine:</p>
          <p>
            Swing dance DJ sets, lindy-hop discussion, photography and crochet
            projects. Enjoy!
          </p>
        </div>
      </Popup>
    {/if}
    <div class="shcol" id="d3" />
  </section>

  <section class="container box4">
    <div class="shcol" id="a4" />
    <div class="shrow" id="b4" />
    <button
      class="bigsq"
      id="c4"
      style="background-image: url('/images/stuff/ascii.png')"
      title="Open Ascii Art"
    >
      <h1 on:click={() => (show_c4 = true)} class="caption">ASCII Art</h1>
    </button>
    {#if show_c4}
      <Popup on:closePopup={popupClose} title="Ascii Art" rawtext={Ascii}>
        <div slot="desc">
          <p>
            When I was 15 or so I frequented several USENET newsgroups,
            particularly alt.fan.eddie-izzard and alt.ascii-art:
          </p>
        </div>
      </Popup>
    {/if}
    <div class="smsq1" id="d4" />
  </section>
</div>

<style>
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: calc(0.25rem + 0.5vmin);
    margin: 5vw 5vw calc(3vw + var(--h0));
  }

  .container {
    width: calc(50% - (0.25rem + 0.5vmin) / 2);
    max-width: 800px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: calc(0.25rem + 0.5vmin);
  }

  .container > div,
  .container button {
    border-radius: var(--border-radii);
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transition: transform 0.2s ease;
    box-shadow: 2px 2px 10px -8px var(--shadow);
  }
  .container > button:hover,
  .container > button:focus,
  .container > div:hover,
  .container > div:focus {
    background-color: var(--soprano2nd);
    background-repeat: no-repeat;
    background-size: 0;
    transition: transform 0.1s ease;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px -9px var(--shadow);
  }
  .caption {
    visibility: hidden;
    display: grid;
    place-content: center;
    height: 100%;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: var(--heavy);
  }
  button:hover .caption,
  button:focus .caption {
    visibility: visible;
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
    .container {
      width: 100%;
    }
  }
</style>
