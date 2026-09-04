# State

Snapshot. Rewritten in place, never appended to. If this reads like a log, it is wrong.

**Last updated:** 2026-09-04

## What this is

A Next.js App Router rebuild of The Mystic Falls Codex, an interactive encyclopedia
of the in-universe history of *The Vampire Diaries*, *The Originals* and *Legacies*.
Rebuilt from a static eight-page HTML artifact that predates this pipeline.

## Where it stands

| Thing | State |
| --- | --- |
| Routes | 11 fixed + 110 people + 80 nodes = 203 statically generated pages |
| Quality gate | `npm run check` green |
| Tests | 40 passing; 100% statements/lines/functions, 89% branches on `src/lib` |
| Build | `npm run build` green |
| Repo | https://github.com/akshit-bansal11/mystic-falls-codex |
| Deployment | Vercel, **blocked by Deployment Protection** — see `OPEN_ITEMS.md` |

## Architecture in one paragraph

Content lives in ten typed modules under `src/data/`, one per entity, consumed only
by Server Components. Four client components exist — the map viewport, the people
search, the theme toggle and the section nav — and none of them import a data
module, so no content ships as JavaScript. `src/lib/codex/` holds the pure layout
maths for the causal map and the family trees, which is the only real logic and the
only thing unit-tested.

## Where the content came from

`../_inbox/mystic-falls-codex/`, read-only. The JSON export supplied the content;
the map's grid coordinates and the per-category CSS variables survived only in
`codex-data.js` and were read from there. A one-off conversion script produced
`src/data/`; it was not committed, because the content is finished and generation
machinery for a job that runs once is unused complexity.
