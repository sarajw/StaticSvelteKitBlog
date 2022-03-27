---
title: "#100DaysOfCode"
date: "around 2022/02/22"
exerpt: Copying and pasting my tweets on the matter as I slowly make my way through nonconsecutively the 100 days.
image: twitter.png
---

[![Twitter account @sarajwallen](/images/blog/twitter.png)](https://twitter.com/sarajwallen)
<p class="caption">My twitter account is <a href="https://twitter.com/sarajwallen">@sarajwallen</a> :)</p>

## Day 32/#100DaysOfCode 

Apparently if you transform:translate() an element, Firefox still gives it the space it would have taken up before it was moved. A bit like position: relative I suppose?

So now I know... but only after a good period spent scratching my head over it 😅

## Day 31/#100DaysOfCode 

I was fiddling with the HTML ```<details>``` tag to try and trick it into becoming an elegant non-js navigation clicky menu.

Well, it worked, but I also wanted it to close when clicking outside, so I had to add JS anyway 😅

Have a look: http://details-nav.netlify.app

## Day 30/#100DaysOfCode

I am stuck in ever-decreasing circles of fiddling with stuff on my landing page and blog, I really need to get on with more learning!

Considering joining 
@flaviocopes' bootcamp this year, and in the meantime I'm looking back into @wesbos' JavaScript notes.

## Day 29/#100DaysOfCode

- lose ugly drop shadows ✅
- social icons white in dark mode ✅
- line up h3 headings ✅
- CSS art interactivity ✅
- social icons to line up based on portrait/landscape ✅

Plus a bunch of other twiddly things, I got lost in the mire of minor CSS tweaks!

### Day 29 continued:

I'm pleased with the interaction (on hover, or tap on mobile) on the CSS art at http://sarawallen.com
 
First I was like boo, you can see how the shapes are constructed, and then I was like oh, cool, you can see how the shapes are constructed!

## Day 28/#100DaysOfCode

Things to fix on landing page:
- ugly drop shadows
- social icons should be white for dark mode
- get all h3 headings to line up

Improvements:
- CSS art interactivity
- add privacy policy / 'Impressum'
- social icons to line up based on portrait/landscape

## Day 27/#100DaysOfCode

The last couple of days, I
- watched @traversymedia's 2022 guide which was really insightful
- played with new svh/lvh/dvh etc CSS units on my newly updated old iPhone 7, hope it comes to more (particularly mobile) browsers soon!
- messed with webflow a bit

## Day 26/#100DaysOfCode 

Using PowerShell at work again, creating image lists for ffmpeg to turn into automated time-lapse videos.

Question for video types - is there a known good codec and compression level that is playable on almost all systems and isn't too lossy? libx264?

## Day 25/#100DaysOfCode (1/4 done!)

* Fix index page for dark mode ✅
* Investigate linear-gradient Safari issue [it was broken CSS] ✅
* Work out what element is making the whole page have focus style (the dashed green line) & turn off ✅
* Finish contact form thank you page ✅

## Day 24/#100DaysOfCode

Fixed some things on http://blog.sarawallen.com ... broken some other things, always the way 😅

### Day 24 continued

Notes to self:

* Fix index page for dark mode
* Investige linear-gradient Safari discrepancy
* Work out what element is making the whole page have focus style (the dashed green line) and turn it off
* Finish contact form thank you page
* Create custom 404 page

## Day 23/#100DaysOfCode

* Sort out contact form* ✅
* Make my sites function in mobile-landscape-mode 😵 - eeh, mostly ✅

*The contact form was a proper pain, it took me a while to work out what Netlify needed me to do to make it work.

Next up: Custom submission and error pages!

## Day 22/#100DaysOfCode 

Unsure whether I want to merge http://sarawallen.com and http://blog.sarawallen.com just yet.

The former is made with pure HTML & CSS, it would almost be sad to stuff it into the other one!

I'm very pleased with the blog's navigation now, though.

## Day 21/#100DaysOfCode 

I have been wrangling the tabs and colours in the navigation of my blog, definitely got some work to do to get tabs to come forward when active, but am slowly finding my way.

Also thank you Svelte for afterUpdate()! Took me a while to find it though...

## Day 20/#100DaysOfCode

Well, it's a start! This was the header from an old Channel 4 Teletext page I used to read avidly as a teen, Mega-zine:

~~https://inspiring-chandrasekhar-d972e0.netlify.app~~<br> *link no longer functional*

Not a patch on your site @andrewjnile but fun to do!

### Day 20 continued
 
Can now be found at https://mega-zine.netlify.app

## ~~Day 18/#100DaysOfCode~~<br>Day 19/#100DaysOfCode 

I dunno now, I did some things earlier but I've already forgotten what they were? Ukraine-related news and anxiety (rightly) overwhelms everything else.

Слава Україні!

### Day 19 continued
...this should have been Day 19/#100DaysOfCode 

Like I say, distracted.

I am planning stuff though, trying to find a niche of things to make - I am considering mocking up old TV idents and teletext pages in HTML & CSS for fun :)

## Day 18/#100DaysOfCode 

Added a secondary pop colour. Not sure about them... And the light/dark modes also need a manual toggle.

My popups/modals have been made way better with JavaScript event.stopPropagation() and CSS overscroll-behavior: contain 🚀

## Day 17/#100DaysOfCode 

So the focus highlighting is back. I've made the function of the popups a little better. The ascii-art is now somewhat more viewable on mobiles.

I've connected it to http://blog.sarawallen.com! 🎉

And http://sarawallen.com now has styling to match :)

## Day 16/#100DaysOfCode 

Added a pop colour to my 'blogolio' amongst other little fixes. The front, stuff and contact pages need content.

I also need to work on my main landing page - I want to keep it, but the styling needs an overhaul, and I must locally host the font...

### Day 16 continued
Notes to self:
* Focus highlighting - outline (+offset?) or border? ✅ done
* Prioritise accessibility.
* Consider elements expanding in place instead of introducing modals, ooh.
* Host http://sarawallen.com font(s) locally.
* Make the ascii-art text responsive.

## Day 15/#100DaysOfCode

Battled windows command line, installing make, but failing to compile a TTF-WOFF2 converter. Never mind, I managed to get hold of the woff2 font file I wanted in the end!

Svelte blog also progressing, using CSS grid a bit more. Separating out components :)

## Day 14/#100DaysOfCode

Got confused in svelte when a bit of simple JS wouldn't work, but then have found the native IF setup to be a much better solution thanks to the help from the discord!

Working on making my own pop-up/modal component for use in my portfolio/stuff section :)

### Day 14 continued

Notes to self before bed:

Fix padding discrepancy between /blog and /stuff on mobile

Reconsider popup position (fixed? absolute?) and how to darken rest of site behind it (huge box shadow? Is that legit CSS?)

Add content:
Contact 
Front page (hero?)

## Day 13/#100DaysOfCode 

2nd attempt at the svelte static blog looks good, and now I'm trying to build out the portfolio/stuff section.

There are so many cool complex things you can do in webdev frameworks, but I'm taking baby steps - I want to (mostly) understand what I'm doing!

### Day 13 continued

Just to add that I'm getting some great support from the @SvelteSociety and @KevinJPowell's discord servers, not to mention conversations I've had here on twitter.

I'm so thankful for the communities around development 🙏♥️

## Day 12/#100DaysOfCode

Ooof:

I made a mess out of moving project folders around on my computer, so lost most of the last version of the blog I was making in @sveltejs!

Then I missed out a forward slash which meant the built version of my new one couldn't see fonts and images 🤦

### Day 12 continued

The upshot of this is I've just learned how I /should/ be using assets in SvelteKit,<br>~and~<br>
the new version is now being pushed to GitHub from the start - and therefore also now being auto-built and deployed on Netlify. Winner.

Temporary URL: https://hardcore-bose-029a18.netlify.app

## Day 11/#100DaysOfCode

Arguing with some aspects of @sveltejs because it seems every which way of making a website involves some fudging, somewhere! Otherwise, I like it very much as a ‘modern’ way of building websites :)

Also still tussling with PowerShell at work…

## Day 10/#100DaysOfCode

Already 10% done?

I have a blog! A static one! Built with @sveltejs! Temporary site is here: https://pensive-murdock-678461.netlify.app

The design is… hm. Trying to harmonise it with http://sarawallen.com. Very Under Construction 🏗️👷

With thanks to @jjcollinsworth :)

## Day 9/#100DaysOfCode

More PowerShell, more SvelteKit static blog building.

With the latter I really should finish the tutorial before messing with parts of it, because inevitably it gets around to what I want to try anyway, and does whatever it is way more efficiently! ^_^

## Day 8/#100DaysOfCode

“Let’s learn SvelteKit by building a static Markdown blog from scratch”
\- @jjcollinsworth

Wish me luck!

## Day 7/#100DaysOfCode

On the day job at @MKtimelapse - playing with PowerShell and using it to create a file list for ffmpeg to turn into an auto-generated time-lapse movie.

I did it a while ago so first I’m trying to understand my old code (🤦) before I adapt it to new uses…

## Day 6/#100DaysOfCode

Oops. Opening a Svelte project in VSCode just closed the Next one. I guess now I know that happens, glad it prompted me to save before it went.

Also having a first peek at webflow, even if that’s in opposition to what I’m trying to learn. I’m intrigued.

## Day 5/#100DaysOfCode

Managing to eke out an hour before I go to bed. I’m pausing the next.js tutorial because the svelte one is right in front of me and isn’t requiring me to look at a video right now - I much prefer text/interaction based stuff!

## Day 4/#100DaysOfCode

Still on @thenetninjauk’s Next.js tutorial - now we’re actually getting into more JavaScript!

I’m still stuck between “Ooo this is clever” and “All this abstraction feels so unnecessary…” - but then I haven’t built huge dynamic sites or apps (…yet!)

## Not-a-Day/#100DaysOfCode

Not managing to do one of the #100DaysOfCode today, but thinking about planning…

Currently doing a Next.js tutorial
Depending on how I feel at the end of that, I may or may not look at React or Svelte.
Next project goal: Make myself a blog site.

## Day 3/#100DaysOfCode

Continuing @thenetninjauk’s Next.js tutorial :ninja:

## Day 2/#100DaysOfCode

Edited some text in the landing page I made for my friend http://yasmin-brinkmann.com :)

Kicking myself about the things I don’t know by heart on https://css-speedrun.netlify.app !

Learning that using Google Fonts without hosting them locally is not GDPR-compliant!

## So. #100DaysOfCode - let’s do this.

They won’t be consecutive. But I will account for them.

Day 1/100 - setting myself up to have a play with @nextjs

Smart to skip over React entirely to play here first? Who knows! Don’t know until I try…