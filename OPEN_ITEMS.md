# Open items

Deferred, accepted or unprovisioned work. Entries are deleted when done.

## Blocking

- **CI is red: `npm ci` cannot resolve the lockfile on Linux.** Four attempts, all
  failed; stopped under CI-07 rather than looping a fifth time.

  Exact error on the runner and, as of the last attempt, reproducible locally with
  `npm ci --dry-run`:

  ```
  npm error code EUSAGE
  npm error Missing: @emnapi/core@1.10.0 from lock file
  npm error Missing: @emnapi/runtime@1.10.0 from lock file
  npm error Missing: @emnapi/wasi-threads@1.2.1 from lock file
  npm error Missing: tslib@2.8.1 from lock file
  ```

  What was tried, in order: `npm install --package-lock-only` over the existing
  lockfile; regenerating from scratch then a full `npm install`; resolving from the
  registry with `node_modules` moved aside; committing the lockfile that `npm ci`
  itself rewrote. The last one did add every platform's top-level binaries
  (`@biomejs/cli-linux-x64`, `@next/swc-linux-x64-gnu`,
  `@tailwindcss/oxide-linux-x64-gnu`), which the earlier ones lacked, but left these
  four nested transitive deps unresolved.

  All four are transitive dependencies of the **wasm fallback** packages
  `@tailwindcss/oxide-wasm32-wasi` and `@img/sharp-wasm32`, which npm records without
  their nested tree. Untried options, in rough order of preference: generate the
  lockfile on Linux (a one-off `workflow_dispatch` job that runs `npm install` on
  Ubuntu and commits the result); add `overrides` pinning the `@emnapi/*` and `tslib`
  versions so they land in the lockfile; or drop the wasm fallbacks.

  **`npm ci --dry-run` now reproduces the failure locally**, naming the same four
  packages, so iterate against that rather than against a CI round trip.

- **The deployment is not publicly reachable.** Vercel Deployment Protection is on, so
  `https://mystic-falls-codex-owoe01bcw-akshit-bansal11s-projects.vercel.app` answers
  `302` to `vercel.com/sso-api` rather than serving the site. Turning it off required a
  change that was not permitted in-session. Fix: Vercel dashboard → this project →
  Settings → Deployment Protection → Vercel Authentication → **Disabled**. Until then,
  SEO-10's HTTP verification of `/robots.txt`, `/sitemap.xml`, the canonicals and the
  404 status cannot be run against the real origin.

## Unmet spec rules, stated rather than hidden

- **CD-02 — a required reviewer who is not the author.** Impossible on a single-owner
  repository. Branch protection can require a status check but not a second person.
- **CD-04 — preview → staging → production.** There is no staging environment. Vercel
  provides per-PR previews and production only.
- **CD-13 — rollback drill.** Not executed. Vercel's instant rollback is available and
  untested here; CD-13 wants it exercised before the first production deploy.
- **CD-17 — post-deploy smoke check.** Not wired, because the origin is not reachable
  yet. Should assert 200, the security headers, and a known string on one route.
- **CI-12 — secret scanning across full history.** Not in the pipeline. GitHub's own
  push protection covers the repository, which is not the same thing as a committed
  gitleaks step.
- **CI-17 / CI-18 — branch protection with a required status check.** Not configured;
  needs to be set and then verified through the forge API, not by reading the workflow.
- **CI-19 — build provenance (SLSA).** Not emitted.
- **SEO-04 — Open Graph image.** No 1200×630 card is generated, so the card metadata
  currently references no image.
- **E2E-SPEC — no browser suite.** The keyboard pass, the 320 px horizontal-scroll
  gate and the axe scan are all specified and none are written. They need a reachable
  origin.

## Accepted, with reasons

- **`!important` in the reduced-motion block.** Biome warns. It is the one place the
  declaration is correct: it must beat component-level transitions. The duration tokens
  already collapse to zero; this is the belt to that pair of braces.
- **Family-tree and map member links are plain `<a>` inside SVG**, so they cause a full
  navigation rather than a client-side one. Real links with real text were worth more
  than the transition.
- **`theme.ts` is excluded from coverage.** It reads `document` and `matchMedia`; a
  node-environment unit test would assert a jsdom shim rather than behaviour. It
  belongs in the browser suite above.
