This project inherits every rule in ~/.claude/CLAUDE.md. Rules below add to or override it. Nothing here restates it.

## Read the Notion page before you touch this repo

**This repo stores code and nothing else.** Every other artefact for this project
lives on one Notion page:

    The Mystic Falls Codex
    https://app.notion.com/p/3d1c6445b19f8158adc6c3b961645b9b
    page id       3d1c6445-b19f-8158-adc6-c3b961645b9b
    reference id  yfu0idauhvj2nm9nkp0lcgkd7-xtpe96zzj3

Fetch it in full **first** — before planning, before proposing a change, before
reading source files, before answering a question about this project. Not after,
and not only when something is unclear.

Where the two disagree: **the repo wins on code, the Notion page wins on
everything else.**

`STATE.md`, `DECISIONS.md`, `DRIFT.md`, `OPEN_ITEMS.md`, `TECH-STACK.md` and
`DIRECTORY-STRUCTURE.md` were migrated to that page on 2026-09-05 and deleted from
this repo on purpose. Do not re-create them here. Write the fact to Notion instead.

At the end of every session, append a dated entry to the page's **Chat log** and
refresh **Current state**, **Open threads** and **Next actions**.

- The content is finished. It was fact-checked in 153 corrections before this repo
  existed; do not re-litigate franchise facts, and do not "correct" a date without
  checking the Decisions log on the Notion page first.
- `_inbox/` in the parent directory is the original source material. It is read-only
  and is not part of this repo.
- No content data may be imported by a client component. The four client components
  are the map viewport, the people search, the theme toggle and the section nav;
  none of them import from `src/data/`. Adding such an import ships the encyclopedia
  to the browser.
