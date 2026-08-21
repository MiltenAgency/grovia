# Grovia — strategy and growth for modern teams (Next.js rebuild)

## Register

Warm paper under a soft product demo. The page ground is `#f4f2ee`, every
grouped card sits on `#f0ece6`, and the only two saturated things on the whole
site are a butter-yellow pill (`#fef7af`) and a black button. Type is Albert
Sans at 400 for every heading — 56/40/36/30/26/20 at 1440, tightened to
`-0.05em` down to h3 and `-0.04em` below — over Geist for everything that is
not a heading. Two photographic bands (pricing, closing call to action) sit
under a 68% black scrim and carry the only white type on the site.

## Users

A founder or ops lead at a startup that has outgrown spreadsheets. They arrive
wanting four things in order: proof the product does something concrete
(the dashboard still and the three-step strip), proof it fits the tools they
already run (integrations), a price, and evidence someone like them has done
this before (six case studies with named authors). The page answers them in
exactly that order and closes on a contact form.

## Product Purpose

A marketing site with a small case-study collection. Nine routes: the home page
(eight bands, hero to closing CTA), an about page, the case-study index, and six
case-study articles behind one `[slug]` segment. Every outbound path leads to
`/#pricing`, `/#contact` or a case study — there is no app to link to.

## Brand Personality

Nine colours do the work: `#f4f2ee` paper, `#f0ece6` card ground, `#efece6`
under the FAQ, `#ede9e6` for the about bento frames, `#000` ink, `#1a1a1a` for
the counters, `#605f5f` for the second voice, `#aeaeae` for step numbers and
`#fef7af` for the accent. Two faces: **Albert Sans 400/500** for display,
**Geist 400/500** for body. Corners run 12 / 16 / 20 / 24 / 28 / 32px, and every
white outline — the hero mock, the dashboard still, the step cards — is painted
on an `::after` overlay so it never changes a box's height. The top 1024px of
every route carries a tiled noise bitmap in `overlay` blend plus two clipped
runs of 70px gradient bars that fade toward the middle of the viewport.

## Design Principles

- **One measure, three gutters.** A 1200px frame with an 80px gutter at 1440
  (content column 1040), 64px between 810 and 1199, 24px below. Bleed panels
  (pricing, closing CTA, footer) sit 20px in from the viewport — 4px on phones —
  and carry their own 60 / 44 / 24px gutter.
- **Eighty is the rhythm.** Every section is 80px top and bottom at every
  breakpoint. The exceptions are the hero (100px above the fold, 40 on phones),
  the pricing band on phones (64) and the footer (64 / 40).
- **Headings scale, body does not.** 56→50→36 for h1, 40→36→30 for h2,
  36→28→24 for h3, and so on; 18/16/14/12px body sizes are identical at 1440,
  810 and 390.
- **Cards are grouped, not spaced.** Related cards live inside one `#f0ece6`
  plate with 8px of padding and 8px gaps — the case-study grid, the step strip,
  the FAQ list, the plan selector and the about metrics all use the same rule.
- **Three things are interactive and they all keep their height.** The step
  strip is a hover accordion (509 / 251 / 248px above 1200); the feature tabs
  swap one 522×389 art frame; the plan selector swaps one card. None of them
  change the height of their section, which is why the page never jumps.
- **Four things move on a loop.** The client strip crawls left at 50px/s behind
  a 10%/90% edge fade; the two integration columns crawl up and down at 30px/s
  behind an 11.9%/88% fade. Nothing else animates perpetually.
- **Entrances are the export's own.** `opacity: 0.001` plus 30px in from the
  left above 810 (20px down from above below it), 0.4s on
  `cubic-bezier(.44, 0, .56, 1)`, delays stepping by 0.1 — the literal numbers
  from the export's `<script type="framer/appear">` payload.

## Accessibility & Inclusion

Semantic `header` / `nav` / `main` / `section` / `footer`, one `h1` per route,
section headings as `h2`, and the export's own `h4`/`h5`/`h6` kept where it uses
them (step titles, case-study block headings, plan names, FAQ questions, the
footer's newsletter line). Testimonials are `figure` / `blockquote` /
`figcaption`. The feature tabs and the plan selector are real
`role="tablist"` groups with `aria-selected` and `aria-controls`; the FAQ is
five `h6`-wrapped `aria-expanded` buttons pointing at `aria-controls` panels,
and several can stand open at once, as in the original. The mobile navigation is
an `aria-expanded` disclosure that also carries the primary call to action.
Every form control has a `<label>` — the newsletter's is screen-reader-only —
and the contact form reports success through a `role="status"` line. Decorative
art (the noise band, the stripe bars, the client marks, the rating avatars, the
plus rules, every icon) is `aria-hidden` or has empty `alt`; the two substantive
images, the dashboard still and each case-study cover, are described.

`prefers-reduced-motion: reduce` turns Lenis off, freezes all three tickers and
renders every reveal in its settled state with no transition. The media query is
read in an effect, never during render, so the server and the first client
render agree.

## Fidelity

Measured at 1440×1000 against the export running side by side on port 4210,
after both had been scrolled end to end and allowed to settle.

| Home band | Original | Rebuild |
|---|---|---|
| Hero | 0 + 708 | 0 + 708 |
| Process | 708 + 996 | 708 + 996 |
| Features | 1704 + 805 | 1704 + 805 |
| Integrations | 2509 + 625 | 2509 + 625 |
| Pricing | 3134 + 649 | 3134 + 649 |
| Case studies + testimonials | 3782 + 1957 | 3782 + 1957 |
| FAQ | 5739 + 658 | 5739 + 658 |
| Closing CTA | 6397 + 629 | 6397 + 629 |
| Footer | 7027 + 498 | 7026 + 498 |

| About band | Original | Rebuild |
|---|---|---|
| Hero | 0 + 1000 | 0 + 1001 |
| Mission + metrics | 1000 + 832 | 1001 + 832 |
| Team | 1832 + 1070 | 1833 + 1070 |
| Closing CTA | 2903 + 629 | 2903 + 629 |
| Footer | 3532 + 498 | 3532 + 498 |

| Route | Original | Rebuild | Δ |
|---|---|---|---|
| `/` | 7525 | 7524 | **0.0%** |
| `/about` | 4030 | 4030 | **0.0%** |
| `/case-studies` | 2392 | 2392 | **0.0%** |
| `/case-studies/pluto` | 4153 | 4153 | **0.0%** |
| `/case-studies/vitahealth` | 3411 | 3410 | **0.0%** |
| `/case-studies/boxmedia` | 3390 | 3389 | **0.0%** |
| `/case-studies/novatech` | 3931 | 3930 | **0.0%** |
| `/case-studies/naviai` | 3568 | 3568 | **0.0%** |
| `/case-studies/lumora` | 4086 | 4085 | **0.0%** |

Card and container geometry matches box for box: 1040px content column, 508×451
case-study cards inside a 1040-wide plate, 522×389 feature art frames, 341×409
testimonial cards stepped 0/40/80px, 587×90 FAQ rows (173 and 151 open), 294×268
metric cards, 298×435 team cards, 1024×450 case-study covers, 840×500 single
block images and 414×300 pairs.

At 810 every route is within 1px — 9394 / 4913 / 2051 / 4060 / 3984 / 3659 /
4303 / 3393 / 3418 against 9394 / 4913 / 2052 / 4060 / 3984 / 3660 / 4304 /
3394 / 3418. At 390 every route is within 2px: 11496 / 6637 / 3273 / 4251 /
4231 / 4041 / 4447 / 3740 / 3782 against 11498 / 6638 / 3274 / 4252 / 4232 /
4042 / 4448 / 3740 / 3782.

Zero horizontal overflow at 320, 390, 430, 810, 1024, 1200, 1440 and 1920, on
every route plus the 404, with the mobile navigation open and closed, and no
failed asset request on any route with every tab and plan clicked through.
`rm -rf .next && next build` is clean — no type errors, all twelve routes
prerendered — and the production build logs no console errors or
warnings under either motion preference.

## Deviations from the original Framer template

- **Seven assets only exist at runtime and were downloaded from the running
  original.** Framer localises the *first* rendered copy of an image and leaves
  every later one pointing at `framerusercontent.com`. That leaves the export
  missing the art for steps 02 and 03, three of the four feature-tab
  illustrations plus the small floating card on the fourth, and the about hero's
  video. They now live in `public/assets/img/*.png` and
  `public/assets/video/s829pGpNZhuOHQj6ne0akFvMTs.mp4`. Without that step three
  of the four tabs and two of the three steps would render as empty plates,
  which is exactly what the *static* export does.
- **Everything behind an interaction was read off the running original.** The
  static HTML ships only the Starter plan, only the "Client portal" tab, and no
  hover state for steps 02/03. Driving the page with Playwright gives Growth at
  **$69/mo** and Scale at **$129/mo** with their own blurbs and feature lists,
  the three missing tab headings and bodies, and the two missing step
  illustrations. Nothing here is invented.
- **The template's own bugs are kept.** Scale is "For fast-scaling **starups**".
  Starter's price reads "$24 **/ mo**" while Growth and Scale read "$129
  **/mo**" — the space disappears on the upper two tiers. The FAQ answer about
  company types uses a straight `'` in "you're" while every other contraction on
  the site is a typographic `’`. BoxMedia's "More insights to explore" row lists
  **BoxMedia itself** alongside NovaTech. The last bullet on several case
  studies runs its closing sentence on after the bullet text with only a `<br>`
  between them. The nav's Features link points at `#feature`, singular. All of
  it is reproduced.
- **The footer's email is demoted from `h1` to `p`.** The export wraps
  `hello@grovia.io` in an `<h1>` in the footer of every route, which gives each
  page two top-level headings. The rebuild keeps the 56px type and the exact box
  but marks it up as a paragraph.
- **Two hero `h1`s become one.** The export renders "Strategy and growth for"
  and "modern teams" as two separate `<h1>` elements. The rebuild uses one `h1`
  with a `<br>`; the three rendered lines break in the same places and the block
  measures the same 185px. The about and case-study index headings keep the
  export's per-word `<span>`s — they are what stops "fast-growing" breaking at
  its hyphen — but sit inside a single `h1`.
- **The Framer template badge is dropped.** The export paints a fixed "New
  Template / Get Template" card in the bottom-right of every route, linking to
  framer.com's marketplace. It is Framer's own promotion, not site content, so
  it is not reproduced. It is also why an unclipped screenshot of the original
  shows a black card the rebuild does not.
- **`tel:` and `mailto:` are written properly.** The export emits
  `href="tel: 12068371232"` and `href="mailto: hello@grovia.io"`, with a space
  after the scheme, which some clients refuse. The rebuild drops the space. The
  displayed text — `206-837-1232`, `hello@grovia.io` — is unchanged.
- **Both forms post nowhere.** The contact form and the footer newsletter keep
  their fields, `required` validation and placeholders (`Jane Smith`,
  `jane@framer.com`, `Enter your message`, `name@email.com`) verbatim and
  acknowledge submission locally. Wire them to a real endpoint before launch.
  The plan card's "Schedule a demo" button keeps the export's own destination,
  `https://lunisdesign.com` — the template author's site.
- **The mobile layout is fluid; the original's is fixed.** Framer pins the page
  to 810px between 810 and 1199 and to 390px below that, then centres it. The
  rebuild uses real breakpoints, so on a 430px phone the content fills the
  screen instead of sitting in a 390px column. Heights still match within a
  pixel at 390 and 810.
- **The hero product mock is drawn once and scaled.** It is authored at its
  native 510×416 with the export's exact numbers — a 460×332 card rotated 2°, a
  293×232 chart rotated −3° with a 5px backdrop blur, both with Framer's
  fractional 23.4953 / 7.83178 / 3.91589 / 14.5066px paddings — and scaled to
  1.004 and 0.671 for the tablet and phone boxes. Framer instead re-lays it out
  per breakpoint, so at 390 its chart card is a little wider than the rebuild's
  and "2h 20m" wraps to two lines where the rebuild keeps it on one. The box the
  mock occupies is the original's, so nothing below it moves.
- **The about metric tints follow the desktop assignment.** The four cards are
  40% / 80% / 80% / 40% white in the 2×2 grid; the phone variant of the export
  re-orders them to 40 / 80 / 40 / 80 so the checkerboard survives a single
  column. The rebuild keeps the desktop order at every width. Nothing moves —
  only two card backgrounds differ by 40% opacity below 810.
- **The step accordion uses flex ratios, not Framer's nested grid.** The open
  card is 509px and the two closed cards land at 249.5px each; the original's
  nested `768px + 248px` grid gives 251 and 248. Card heights, the section
  height and every other measurement are identical.
- **The tablet contact form's 570px height is reproduced, slack and all.**
  Between 810 and 1199 the export pins the form to 570px while its content only
  fills 468, leaving 102px of empty panel at the bottom. That is the original's
  design decision, not a bug in the rebuild, and removing it would put the
  section 102px out.
- **Ticker phase is arbitrary.** All three marquees are CSS keyframes at the
  measured speeds (50px/s horizontal, 30px/s vertical), so a screenshot catches
  them wherever they happen to be. The speeds, the fade stops, the 100px logo
  tiles and the 12px/40px gaps are the original's.
- **Icons are the export's own paths.** All 22 are lifted verbatim out of the
  export's `#svg-templates` block into `components/ui/Icon.tsx`, with Framer's
  CSS-variable indirection resolved to `currentColor`. That includes the arrow
  whose enclosing square is translated off the 24×24 viewBox and therefore never
  draws — reproduced as-is rather than "fixed".
- **Fonts are the export's own `.woff2` files**, served from `app/fonts.css`
  rather than `next/font/google`, trimmed to the four faces actually rendered
  (Albert Sans 400 and 500, Geist 400 and 500) plus Framer's metric-matched
  Arial placeholders so nothing shifts on load. Albert Sans 700, both italics,
  Geist 700, Fragment Mono and every Inter subset ship in the export and are
  never drawn, so they are dropped — 59 files down to 5.
- **Two alt strings are written, not extracted.** The about bento's stills carry
  no `alt` in the export; the rebuild describes them ("Two colleagues at a desk
  in a yellow office", "Three colleagues around a laptop") in the template's
  voice. Everything else with an `alt` uses the export's own — "Minimalist Note
  Card Composition", "Green Plant", "Pink Radio", "Laptop and Plant",
  "3D Objects", "Health Device".
- **The client and integration marks are anonymous in the original too.** Four
  invented brands (Pluto Inc, VitaHealth, BoxMedia, NovaTech) and eight
  unlabelled integration logos. Reproduced as-is.

## Working with the export

`scripts/extract.mjs` mines the original (`../grovia - framer`): it decodes the
HTML string literal out of each `app/**/route.ts` and dumps routes, text, unique
text, images, colours, headings, sections, metadata, `@font-face` rules, or a
raw window around any needle. Run it with no arguments for usage.

Everything the static HTML does not carry — the two upper price tiers, three of
the four feature tabs, the hover states of the step strip, the seven runtime-only
assets, the ticker speeds and mask stops, the two card rotations and the exact
box shadows — was read off the running original with Playwright rather than
invented.
