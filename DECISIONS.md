# Decisions

Append-only. Never edited, never reordered. Each entry records a real alternative
that was rejected and why.

## 2026-09-04 — Rebuild as Next.js rather than port the static build

The original was eight HTML pages sharing one shell, with all content inlined as
JavaScript. **Rejected:** copying it as-is (the original backfill plan). **Why:** the
instruction changed to a full Next.js app on Vercel. The rebuild also removes the
original's worst property for free — it shipped 281 KB of content to the browser on
every page, so opening one biography downloaded the other 109.

## 2026-09-04 — Conventional Commits over the repo's own prefix scheme

`F:\projects\mini-projects\CLAUDE.md` specifies `init/`, `feat/`, `add/`, `sm/`,
`hide/`. CD-SPEC specifies Conventional Commits and states it owns the commit
convention for the whole rules system. **Rejected:** the repo prefixes. **Why:** the
user twice stated the spec files are the source of truth, and that CLAUDE.md was
already stale on deployment target. Recorded in `DRIFT.md`.

## 2026-09-04 — Convert the data once, do not keep a generator

The JSON export is a better conversion source than `codex-data.js`: clean keys, real
nesting, no six-way `PEOPLE_1..6` split. **Rejected:** keeping the JSON in the repo
with a committed `npm run generate` and a CI diff check. **Why:** the content is
finished. A generator plus its input is two artefacts that must agree forever, to
serve a conversion that runs once. The TS modules are now the single source.

## 2026-09-04 — Node grid coordinates read from the JS, not the JSON

The JSON export dropped each node's `row`/`col` and each category's CSS variable.
Without them the causal map has no layout. **Rejected:** re-deriving a layout.
**Why:** the original's hand-tuned positions are the design; re-deriving would have
invented a different map. `codex-data.js` is the only surviving record.

## 2026-09-04 — Section nav is links with `aria-current`, not an ARIA tablist

The original used `role="tablist"` with `aria-selected` on bare anchors. The Notion
record described the fix as "add `role="tab"`". **Rejected:** adding `role="tab"`.
**Why:** these navigate to eight separate documents. The ARIA tabs pattern promises
arrow-key movement between panels in one document, which separate pages cannot
deliver, so `role="tab"` would have made the lie more specific rather than removing
it.

## 2026-09-04 — Node and person detail are routes, not a side panel

The original showed detail in a panel beside the map, addressed by `?n=` and `#p=`.
**Rejected:** reproducing the panel with `searchParams`. **Why:** reading
`searchParams` makes the route dynamic, which would have cost static generation for
the entire site. 190 detail routes are individually addressable, linkable and
indexable instead.

## 2026-09-04 — Theme applied by `next/script` `beforeInteractive`

Three approaches were tried. **Rejected:** an inline script (needs
`dangerouslySetInnerHTML`; CI-06 forbids suppressing a security rule), a bare
`<script src>` (trips Next's `no-sync-scripts`), and a server-read cookie (makes
every route dynamic). **Why:** `beforeInteractive` is the framework's sanctioned
answer and satisfies both lint rules. Next documents that it does not block
hydration, so the no-flash guarantee is near-certain rather than absolute.

## 2026-09-04 — Five design token values changed from the original

A measured contrast sweep of the original palette failed 12 pairs. `text-faint`
failed 4.5:1 in both themes, `border-default` failed 3:1 in both, and the dark
`accent` failed 4.5:1 while being used as text. **Rejected:** preserving the exact
original hexes. **Why:** the user asked to keep the look but tidy it up, and these
are measured failures rather than taste. Each new value and its ratio is recorded in
`src/app/globals.css`.

## 2026-09-04 — The map is a scrolling region, not a transform-panned canvas

The original panned by dragging only, which fails WCAG SC 2.5.7. **Rejected:** adding
bespoke pan buttons over a transform. **Why:** making the container a real scrolling
region means scrollbars, arrow keys and touch all pan it with no code at all, and
drag becomes a convenience rather than the only way in.

## 2026-09-04 — JSON-LD as a script child, not `dangerouslySetInnerHTML`

The documented React pattern for JSON-LD uses `dangerouslySetInnerHTML`, which would
need a security-rule suppression that CI-06 forbids. **Rejected:** the suppression.
**Why:** React renders a string child of `<script type="application/ld+json">`
verbatim. Verified against the emitted HTML for a node titled "Silas & Qetsiyah": the
output carries a raw `&`, not `&amp;`, so the JSON stays valid.
