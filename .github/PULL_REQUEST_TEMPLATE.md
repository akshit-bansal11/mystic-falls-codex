## What changed

<!-- One line. The commit history carries the detail. -->

## Why

<!-- The problem this solves, not the diff restated. -->

## Verification

<!-- The commands you ran and what they proved. "Reading a file only proves the
     file exists" - a route, header or metadata file is unverified until a
     request has fetched it. -->

- [ ] `npm run check` exits clean
- [ ] `npm run test:coverage` passes the committed threshold
- [ ] `npm run build` succeeds
- [ ] Behaviour verified over HTTP against a deployed origin, if this touches a
      route, metadata, headers or redirects

## Scope of the run

<!-- Which integrations were live, and which paths stayed stub-backed. A clean
     run only covers what it actually exercised. -->

## Continuity files

- [ ] `STATE.md`, `DECISIONS.md`, `DRIFT.md` or `OPEN_ITEMS.md` updated in this
      same commit if this change invalidated them

## Indexation

<!-- Required only if this touches robots, canonicals or the sitemap. Record the
     PREVIOUS value: these lines can de-index the site and a rollback is
     worthless without it. -->
