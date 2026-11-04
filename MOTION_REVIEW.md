# Motion and interaction review

The existing Moneta layout, content, assets, local fonts, and green/lavender
identity are preserved. No dependencies were installed or removed. Existing
uncommitted work was retained. `DESIGN.md` now distinguishes the implemented
Moneta system from its Stripi reference and documents the motion rules.

## Implementation

- Simple entrances use CSS transform/opacity and one-shot IntersectionObservers
  through the existing `Reveal` API. Server markup is visible without JavaScript;
  keyboard focus immediately reveals pending content. Framer Motion no longer
  ships for these simple entrances.
- The existing React Bits `SplitText-TS-TW` supplies one closing-headline sequence.
  GSAP, SplitText, and ScrollTrigger load near that section, with a plain heading
  while loading or if the optional chunk fails. The scoped `useGSAP` context
  reverts on unmount and preference changes; delayed callbacks are context-safe.
  Normal reveals install no pointer/spring handlers or recurring animation loop.
- Native scrolling replaces the mounted Lenis provider. This page has no pinned
  or scrubbed sequence needing smoothing. CSS smooth scrolling remains for anchor
  links and is disabled under reduced motion. The pre-existing Lenis provider and
  installed libraries are retained, but are not mounted/imported into the page.
- Buttons have brief hover, press, and keyboard focus feedback. The mobile menu
  animates its panel and toggle, makes closed content inert, and closes on Escape,
  outside pointer input, focus leaving navigation, and desktop resize. Escape
  restores toggle focus. Pricing now supports vertical arrow keys and Home/End.
- FAQs and pricing changes use short CSS entrances without animated layout.
  Existing feature panels, their image states, and rapid switching are preserved.
- Tickers pause offscreen, in background tabs, and on hover/focus. About footage
  pauses offscreen, in background tabs, and with reduced motion; it uses the
  existing poster. Reduced motion also works when changed during a sequence.
- Fixed registry aliases that replaced Moneta's primary green with black and its
  muted text with near-white. Secondary text now measures about 5.7:1 on the page
  ground. Fixed an unsupported Next 14 `next/font/google` Geist import by using
  the existing self-hosted fonts. Case-study titles retain their appearance and
  now use the page's `h1`.

Registry reviewed: https://reactbits.dev/r/SplitText-TS-TW.json.
No new images, footage, placeholder content, or art direction was introduced.

## Measurements

Production Next.js builds and isolated Chromium via the Chrome DevTools Protocol
were used. The baseline needed the unsupported font import removed before it
could build; all motion and color issues were still present for that baseline.

| Measurement | Baseline | Final |
| --- | ---: | ---: |
| Home first-load JavaScript, Next build | 146 kB | 107 kB |
| About first-load JavaScript | 137 kB | 98 kB |
| Case-study article first-load JavaScript | 137 kB | 96.7 kB |
| Offscreen integration tickers | 2 running | 2 paused |
| JS animation-frame callbacks during 2,400px wheel gesture | 232 | 0 |
| Paint events during that gesture | 70 | 15 |
| Style-update events during that gesture | 225 | 74 |
| Layout events during that gesture | 4 | 4 |

The final hover trace recorded **zero Layout and zero Paint events**. The final
scroll sample recorded no long tasks using PerformanceObserver. Counts and
timings are local lab samples, not a claim of guaranteed 60fps on physical phones.
The deferred GSAP chunk still downloads when its section approaches the viewport.

## Verification

- `npm run build`, TypeScript checking, and `git diff --check` passed.
- Production interactions passed at 1440, 768, 390, and 320px: no horizontal
  overflow; rapid menu toggles; Escape/focus restoration; menu anchor navigation;
  feature-tab switching with stable panel height; keyboard feature and pricing
  selection; independent FAQ expansion; readable, settled split text with no
  leftover will-change. No runtime, console, or HTTP errors in those scenarios.
- Reduced motion: no running CSS animations, native instant anchor scrolling,
  no split wrappers, and clean cancellation when enabled mid-animation.
- About video pauses under reduced motion and offscreen. About, story index,
  and story article routes render with one page title and no horizontal overflow.
- Three client navigation round trips retained one split parent with four words;
  wrappers disappeared on unmount and window resize/wheel listener counts stayed
  constant. This checks lifecycle behavior, not an exhaustive heap-leak proof.
- JavaScript-disabled rendering retains the hero and closing headline.
- Blocking the optional SplitText chunk preserves the plain closing headline and
  the rest of the page, without an uncaught runtime exception; the normal download
  still produces the four-word animation. Both outcomes were screenshotted and
  retain the static headline's exact wrapper height, avoiding a baseline gap on
  the deferred component swap.
- Visual inspection at 1440/768/390: baseline 6 failures; after fixes, 4 retained
  style-rule findings; final scoped gate **0 failures, 7 warnings**, explicitly
  allowing existing eyebrows, numbering, shadows, and icon-card compositions.
  These exceptions preserve the user's requested design identity.
- Source taste lint was also run: its 16 heuristic failures concern retained
  gradients/masks and shadows, including the legitimate floating menu shadow.
  It is not reported as passing. Remaining visual warnings concern the existing
  type scale, small captions, inset alignment, long tablet text measures, muted
  rather than full-ink body text, and absence of home-page footage. Those would
  require broader design changes. Next's existing metadataBase warning remains.

Browser scripts, raw traces, test results, and screenshots are in
`/tmp/grovia-motion/`. The production preview runs at http://127.0.0.1:3005.

## Visual critique

ROUND 1 — before

Seen in one second: the finance headline and balance cards; supporting text is
almost invisible. Idea: Moneta's everyday financial picture becomes the page's
central product preview. Live thing: feature and plan selectors. Layout words:
hero=split / process=steps / features=tabs / integration=split / pricing=split /
stories=grid / faq=split / close=split.
Scores: design 5 · usability 4 · creativity 6 · content 6 → overall 5.0.
Caps applied: unreadable copy and unrevealed sections.
Top three problems: near-white copy in all fold shots; repeated stuck scroll
frames in all page sheets; broken primary color in the desktop fold. Fixed with
brand token restoration, native scrolling, and readable one-shot reveals.

ROUND 2 — after

Seen in one second: the financial overview, with readable supporting copy and a
green primary action. Idea and live selectors are preserved. Layout words remain
unchanged. Scores: design 7 · usability 8 · creativity 6 · content 7 → arithmetic
7.1, capped at 6.5 by the skill's retained decorative-style rules.
Top three remaining visual issues: many inset alignments in desktop-page-01;
long tablet body measures in tablet-page-01; small financial captions in the fold
shots. These remain within the existing design rather than expanding this motion
task into a redesign. Every final inspector screenshot was opened and reviewed.
