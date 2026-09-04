# Tech stack

Versions read from `package-lock.json` on 2026-09-04, never from memory.

## Runtime

| Thing | Version | Why this and not the alternative |
| --- | --- | --- |
| Node | >=24 (`.nvmrc`, `engines`) | Active LTS. Node 20 and 18 are past end of security support. One declared version, read by CI from the same file. |
| Next.js | 16.3.4 | App Router gives Server Components, which is the whole reason no content reaches the browser. Turbopack is the default builder in 16. |
| React | 19.2.8 | Paired with Next 16 by the framework. |
| TypeScript | ^5 | What `create-next-app` pinned. TypeScript 7.0.2 is published, but the framework's own scaffold chose 5.x and the framework is authoritative over "newest available". |

## Build and style

| Thing | Version | Why |
| --- | --- | --- |
| Tailwind CSS | ^4 | CSS-first `@theme`, so the token file is the single source of truth rather than a duplicated JS config. |
| Biome | 2.5.12 | Formatter, import organisation and linter in one pass. Needs `css.parser.tailwindDirectives` for Tailwind 4's `@theme`. |
| ESLint | ^9 + `eslint-config-next` | Next-specific rules Biome does not carry. Only Biome writes files, so the two never fight over the same bytes. |
| Stylelint | ^17 | Stylesheet linting. Its `custom-property-pattern` is widened to allow Tailwind's `--text-h1--line-height` modifier syntax. |

## Tests

| Thing | Version | Why |
| --- | --- | --- |
| Vitest | 5.0.0 | Coverage thresholds committed in `vitest.config.mts`, retries at zero. |
| @vitest/coverage-v8 | latest | Branch coverage, not lines alone. |

## Not used, deliberately

- **Zod.** FE-04 ties schemas to data crossing a trust boundary. This content is
  compiled in from files in this repo; validating the repo against itself buys
  nothing. Types are declared directly.
- **A state library.** There is no cross-subtree client state. Two components hold
  local `useState`; the theme is external state read through `useSyncExternalStore`.
- **An animation library.** The only motion is colour and opacity transitions,
  which are CSS.
- **shadcn/ui.** No component in this project needed a primitive from it. It remains
  the default for future surfaces.

## Hosting

Vercel. Every route is statically generated; there is no server-side runtime work,
no API route and no database.
