This project inherits every rule in ~/.claude/CLAUDE.md. Rules below add to or override it. Nothing here restates it.

## Read the Notion page before you touch this repo

**This repo stores code and nothing else.** Every other artefact for this project
lives on one Notion page:

    The Mystic Falls Codex
    https://app.notion.com/p/3d1c6445b19f8158adc6c3b961645b9b
    page id       3d1c6445-b19f-8158-adc6-c3b961645b9b
    reference id  none - retired 2026-09-20

Fetch it in full **first** — before planning, before proposing a change, before
reading source files, before answering a question about this project. Not after,
and not only when something is unclear.

Where the two disagree: **the repo wins on code, the Notion page wins on
everything else.**

## This is not a mini project any more

Extracted from the mini-projects fleet on 2026-09-20. It is now a top-level project,
a sibling of Kiteloom and Edgepad, and its Notion page lives in the **Projects**
database, not in the mini-projects **Index**.

What that changes:

- **The folder is `F:/projects/mystic-falls-codex`.** It was
  `F:/projects/mini-projects/mystic-falls-codex-xtpe96zzj3`. Nothing in the
  mini-projects tree governs this repo any more - in particular
  `F:/projects/mini-projects/CLAUDE.md` and its `SKILL.md` pipeline do not apply.
- **There is no reference id, by decision.** Top-level projects carry none. Every
  commit up to and including `623918c` carries
  `Ref-ID: yfu0idauhvj2nm9nkp0lcgkd7-xtpe96zzj3` as a trailer and git history cannot
  be rewritten, so that string stays written down here and on the Notion page as the
  only key for `git log --grep=xtpe96zzj3`. **Do not add a `Ref-ID:` trailer to new
  commits.**
- **The site is live and public** at https://mystic-falls-codex.vercel.app, verified
  200 on 2026-09-20. Vercel auto-deploys from GitHub on push to `main`. The Notion
  page claimed for sixteen days that the origin answered 302 and the site did not
  serve; that was measured against a deployment-specific URL, never against the
  production alias. Curl the alias before ever writing that down again.

`STATE.md`, `DECISIONS.md`, `DRIFT.md`, `OPEN_ITEMS.md`, `TECH-STACK.md` and
`DIRECTORY-STRUCTURE.md` were migrated to that page on 2026-09-05 and deleted from
this repo on purpose. Do not re-create them here. Write the fact to Notion instead.

At the end of every session, append a dated entry to the page's **Chat log** and
refresh **Current state**, **Open threads** and **Next actions**.

- The content is finished. It was fact-checked in 153 corrections before this repo
  existed; do not re-litigate franchise facts, and do not "correct" a date without
  checking the Decisions log on the Notion page first.
- The original source material is at `F:/projects/mini-projects/_inbox/mystic-falls-codex/`.
  It is read-only, is not part of this repo, and did **not** move with this project on
  2026-09-20 - it stays in the mini-projects tree with the rest of the inbox.
- No content data may be imported by a client component. The six client components
  are the map viewport, the people search, the theme toggle, the section nav, the
  spoiler notice and the codex book; none of them import from `src/data/`. Adding
  such an import ships the encyclopedia to the browser. Update this count when you
  add one. Both the map and the book take their content as a prop from the Server
  Component that imports it, which is the pattern to follow for a seventh.
