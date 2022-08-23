<script>
  import Popup from "$lib/components/Popup.svelte";
  import Ascii from "$lib/assets/ascii-art.txt?raw";
  let show_a1 = false;
  let show_b1 = false;
  let show_b2 = false;
  let show_d2 = false;
  let show_a3 = false;
  let show_b3 = false;
  let show_c2 = false;
  let show_c3 = false;
  let show_a4 = false;
  let show_b4 = false;
  let show_c4 = false;
  let show_d4 = false;

  function popupClose(event) {
    show_a1 = false;
    show_b1 = false;
    show_b2 = false;
    show_d2 = false;
    show_a3 = false;
    show_b3 = false;
    show_c2 = false;
    show_c3 = false;
    show_a4 = false;
    show_b4 = false;
    show_c4 = false;
    show_d4 = false;
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
        alt="Sara's main landing page - the screenshot shows the nagivation of the website with the INTRO: Hi! Welcome :) and STUFF: Web Development & Design tabs in view"
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
        alt="Yasmin Brinkmann's website - the headline is Praxis für systemische Beratung, Coaching & Biographiearbeit and there is a picture of her with her arms folded wearing a red top and a fetchingly striped blazer."
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
      style="background-image: url('/images/stuff/bendickson_sq.png')"
    >
      <h1 on:click={() => (show_b2 = true)} class="caption">
        Benjamin Dickson
      </h1>
    </button>
    {#if show_b2}
      <Popup
        on:closePopup={popupClose}
        title="Benjamin Dickson"
        url="https://bendickson.co.uk/"
        image="bendickson.jpg"
        asprat="16/9"
        alt="Benjamin Dickson, Comics Writer & Artist desktop website screenshot. His four most recent comic covers are displayed in a row under the title."
      >
        <div slot="desc">
          <p>
            My friend Ben needed a new responsive website to replace an ageing Wordpress site which was not responsive at all. I love building sites with such interesting content!
          </p>
          <p>I built this site with the Astro framework.</p>
        </div>
      </Popup>
    {/if}
    <button
      class="smsq2"
      id="c2"
      style="background-image: url('/images/stuff/lightdark.png')"
      title="Open Mega-Zine"
    >
      <h2 on:click={() => (show_c2 = true)} class="caption">Light&shy;/Dark Mode</h2>
    </button>
    {#if show_c2}
      <Popup
        on:closePopup={popupClose}
        title="Light/Dark Mode"
        url="https://color-scheme-light-dark.netlify.app/"
        image="lightdark_lrg.png"
        asprat="16/9"
        alt="Screenshot from a mini site showing the code and outcome of making a light/dark mode switcher"
      >
        <div slot="desc">
          <p>
            This is a mini site made to be an explainer, showing the code and outcome of making a light/dark mode switcher.
          </p>
          <p>
            It leans heavily on the color-scheme CSS property.
          </p>
        </div>
      </Popup>
    {/if}
    <button
      id="d2"
      class="bigrow"
      style="background-image: url('/images/stuff/binnenalster_small.jpg')"
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
        alt="A photo of the Hamburg Binnenalster, taken from the north-western corner"
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
      class="bigsq"
      id="a3"
      style="background-image: url('/images/stuff/blogolio_sq.png')"
    >
      <h2 on:click={() => (show_a3 = true)} class="caption">Blogolio</h2>
    </button>
    {#if show_a3}
      <Popup
        on:closePopup={popupClose}
        title="Blogolio: this blog & portfolio"
        url="https://blog.sarawallen.com/"
        image="blogolio_large.png"
        asprat="16/9"
        alt="A screenshot of the front page of the blog featuring my head and shoulders. I have glasses on my head and a purple top and grey cardigan on."
      >
        <div slot="desc">
          <p>
            I built this blog to introduce myself to the world of frameworks, and I started with SvelteKit via this article: <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">Let's learn SvelteKit by building a static Markdown blog from scratch</a>
          </p>
          <p>
            I then spent lots of time making up the modals in this portfolio, and I'm quite proud of it - however! Now really I ought to refactor them using &lt;dialog&gt; elements...
          </p>
        </div>
      </Popup>
    {/if}
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
        alt="Mega-zine teletext mock-up - pixellated neon letters and blocky image with a tongue sticking out on a black background"
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
    <button
      class="shcol"
      id="a4"
      style="background-image: url('/images/stuff/cheeper_small.png')"
      title="Open Cheeper"
    >
      <h1 on:click={() => (show_a4 = true)} class="caption">Chee&#8203;per</h1>
    </button>
    {#if show_a4}
      <Popup
        on:closePopup={popupClose}
        title="Cheeper - a Twitter clone"
        url="https://twitter-clone-sarajw.vercel.app"
        image="cheeper_large.png"
        asprat="16/9"
        alt="Cheeper is a Twitter clone"
      >
        <div slot="desc">
          <p>One of the projects made during Flavio Copes' 2022 Bootcamp.</p>
          <p>
            If you'd like to sign in to play, please follow the sign up then contact me - an email is never sent, but I can go see the dummy and give you a magic link :)
          </p>
        </div>
      </Popup>
    {/if}
    <button
      class="shrow"
      id="b4"
      style="background-image: url('/images/stuff/mktimelapse_small.png')"
    >
      <h1 on:click={() => (show_b4 = true)} class="caption">
        MK time&shy;lapse
      </h1>
    </button>
    {#if show_b4}
      <Popup
        on:closePopup={popupClose}
        title="MK timelapse GmbH"
        url="https://mktimelapse.com"
        image="mktimelapse_large.png"
        asprat="16/9"
        alt="MK timelapse GmbH desktop website screenshot. The hero image is a skyscraper under construction."
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
    <button
      class="smsq1"
      id="d4"
      style="background-image: url('/images/stuff/blogger_small.png')"
      title="Open Blogger"
    >
      <h1 on:click={() => (show_d4 = true)} class="caption">Blog&#8203;ger</h1>
    </button>
    {#if show_d4}
      <Popup
        on:closePopup={popupClose}
        title="Blogger Blog"
        url="http://sarajwallen.blogspot.com/"
        image="blogger.png"
        asprat="22/15"
        alt="A bunch of image tiles showing the most recent (but still very old) posts on my Blogger blog."
      >
        <div slot="desc">
          <p>An even older blog than my Tumblr!</p>
          <p>
            Feel free to browse. Again, lots of swing dance related content but other stuff too.
          </p>
        </div>
      </Popup>
    {/if}
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
    max-width: max(800px, 100%/3);
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
