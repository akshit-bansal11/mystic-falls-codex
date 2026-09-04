# The Mystic Falls Codex

An interactive encyclopedia of the **in-universe** history of *The Vampire Diaries*,
*The Originals* and *Legacies* — the fiction's own two-thousand-year chronology, not
the production story.

The franchise delivers its backstory through flashbacks scattered across 331 episodes
and three shows, two of which aired concurrently. The causal spine is nowhere stated
in one place. This is that spine.

## What's in it

| Section | Contents |
| --- | --- |
| The Map | 80 events across 7 eras, each linked to what caused it and what it caused |
| Eras | The chronicle in order, era by era |
| Families | 11 family trees and sirelines |
| People | 110 biographies, searchable and filterable by strand |
| Factions | 19 groups, rosters labelled by relationship |
| Rules | 8 supernatural mechanics the plot obeys |
| Timeline | ~100 dated events, c. 100 BC to 2028 |
| Watch Order | Broadcast order, with the alternating schedule and every crossover |

Every event and every person is a real URL: `/node/silas`, `/people/klaus`.

## Running it

```bash
npm ci
npm run dev     # http://localhost:3000
```

## The quality gate

One command, which CI runs unchanged:

```bash
npm run check   # format, import order, lint, stylelint, typecheck
npm run check:fix
```

It exits non-zero on any finding. There are no lint suppressions in this repository.

## How it is built

Next.js App Router, TypeScript, Tailwind 4. Every route is statically generated —
203 pages, including one per person and one per causal node.

The content lives in typed modules under `src/data/`, one per entity, and is
consumed only by Server Components. **No content data reaches the browser.** The
four client components — the map viewport, the people search, the theme toggle and
the section nav — import no data module between them.

`src/lib/codex/` holds the pure layout maths: the causal map's era banding and edge
routing, and the family-tree geometry.

## Accessibility

Built to WCAG 2.2 AA:

- Section navigation is links with `aria-current`, not a `tablist` of anchors.
- The map is a real scrolling region, so scrollbars, arrow keys and touch all pan it;
  drag is a convenience, not the only way (SC 2.5.7).
- A skip link is the first focusable element on every page.
- Both themes are contrast-measured; five token values were changed from the original
  design to clear 4.5:1 text and 3:1 non-text. The ratios are recorded in
  `src/app/globals.css`.
- Reduced motion is honoured through the duration tokens.

## Content

The content was fact-checked against the Vampire Diaries Fandom wiki and Wikipedia,
a pass that produced 153 corrections. The largest: the Silas and Qetsiyah era was
misdated by roughly 1,900 years, Esther was never a vampire (six Originals, not
seven), and Rose turned Katherine rather than Trevor — which rebuilt the whole
sireline tree.

Unofficial, and unaffiliated with the rights holders. All rights in the underlying
works belong to them.

## Licence

MIT — see [LICENSE](LICENSE).
